let boxes=document.querySelectorAll(".box");
let winning=[[0,1,2],[0,3,6],[0,4,8],[2,4,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8]];

     let turnO=true;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
   
        if(turnO){
box.value="O";
turnO=false;

        }
        else{
            box.value="X";
            turnO=true;
        }
        
box.disabled=true;
checkwinner();
    })
    
});
function checkwinner(){
    for(let pattern of winning)
        {
            let pos1=boxes[pattern[0]].value;
            let pos2=boxes[pattern[1]].value;

            let pos3=boxes[pattern[2]].value;
            if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                alert("winner");
            }
        }
}
};
document.getElementById("reset").addEventListener("click", () => {
    boxes.forEach((box) => {
        box.value = "";
        box.disabled = false;
    });
    turnO = true;
});
