let list = ["one", "two", "three", "four", "five", "six"];
document.getElementById("res").addEventListener("click",reset);
let listset;
let rows = 3;
let colm = 4;
let board = [];
let card1;
let card2;
let count=0;
window.onload = () => {
  suf();
  st();
};

function suf() {
  listset = list.concat(list);
  for (let i = listset.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [listset[i], listset[j]] = [listset[j], listset[i]];
  }
}

function st() {
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < colm; c++) {
      let cardimg = listset.pop();
      row.push(cardimg);

      let card = document.createElement("img");
      card.id = r + "-" + c;
      card.src = cardimg + ".png";
      card.classList.add("card");
      card.addEventListener("click",selectcard);

      document.getElementById("board").append(card);
    }
    board.push(row);
  }
  setTimeout(hide, 2000); 

}

function hide() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < colm; c++) {
      let card = document.getElementById(r + "-" + c);
      card.src = "back.png";
    }
  }
}
function selectcard(){
    if(this.src.includes("back"))
        {
            if(!card1){
                card1=this;
                let cord=card1.id.split("-");
                let r=parseInt(cord[0]);
                let c=parseInt(cord[1]);
                card1.src=board[r][c]+".png";

            }
            else if(!card2 && this!=card1){
                 card2=this;
                let cord=card2.id.split("-");
                let r=parseInt(cord[0]);
                let c=parseInt(cord[1]);
                card2.src=board[r][c]+".png";
  setTimeout(update, 300); 

            }
        }
}
function update(){
    if(card1.src!=card2.src){
        card1.src="back.png";
        card2.src="back.png";

    }
    else{
      count++;
      if(count===6){
  alert("you win");
}
    }

    card1=null;
    card2=null;
}
if(count===6){
  alert("you win");
}
function reset(){
    const boardDiv = document.getElementById("board");
  boardDiv.innerHTML = "";


  listset = [];
  board = [];
  card1 = null;
  card2 = null;

  
  suf();
  st();
}