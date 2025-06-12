let boxes=document.querySelectorAll(".box");
let generate =(a)=>{
 let win=false;

    let val=["rock","paper","scissors"];
    let n=Math.floor(Math.random()*3);
    document.getElementById("com").value=val[n];
    if(a===val[n]){
        document.getElementById("winner").value="draw";
    }
    else{
       if((val[n]==="paper" && a==="scissors")||(val[n]==="rock" && a==="paper") || (val[n]==="scissors" && a==="rock")){
        win=true;
       }
    if(win===true){
        document.getElementById("winner").value="You won";

}
else{
        document.getElementById("winner").value="Computer won";

}
}

 
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
       let a=box.getAttribute("id");
       generate(a);
       
    });

});
document.getElementById("reset").addEventListener("click",()=>{
document.getElementById("winner").value="";
    document.getElementById("com").value="";

})