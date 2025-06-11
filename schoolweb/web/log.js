function valid(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let pass="teamD1";
    let uid="XYZ";
    if(username===uid && password===pass){
        window.location.href = "index.html";
    }
    else{
        alert("wrong username or password");
    }

    

}
document.getElementById("button").addEventListener("click",valid);
