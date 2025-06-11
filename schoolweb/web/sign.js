function entry() {
    let un = document.getElementById("username").value;
    let caps = /[A-Z]/g;
    let eid = document.getElementById("email").value;
    let com = "@gmail.com";
    let pass1 = document.getElementById("password").value;
    let pass2 = document.getElementById("confirm-password").value;

 
    if (!un.match(caps)) {
        alert("Username must contain at least one uppercase letter.");
        return;
    }


    if (!eid.includes(com)) {
        alert("Email must be a Gmail address.");
        return;
    }

  
    if (pass1 !== pass2) {
        alert("Passwords do not match.");
        return;
    }
if(un.match(caps) && eid.includes(com) && pass1 === pass2){
    window.location.href = "index.html";
}
 
}


document.getElementById("button").addEventListener("click", entry);