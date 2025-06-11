function calc()
{let a=document.getElementById("dob").value;
    const current=new Date();
    const bd=new Date(a);
    let age=current.getFullYear()-bd.getFullYear();
    let month=current.getMonth()-bd.getMonth();
    if(month<0){
        age=age-1;
    }
    document.getElementById("ag").value=age;
}
document.getElementById("butt").addEventListener("click",calc);
 