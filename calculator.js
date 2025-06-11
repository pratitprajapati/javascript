function calc(num){
    document.getElementById("box").value+=num;
}
function res(){
    let a=document.getElementById("box").value;
    document.getElementById("box").value=eval(a);
}
function clr(){
     document.getElementById("box").value="";
}