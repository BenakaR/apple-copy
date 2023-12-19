console.log("Hello");
console.log(document.getElementsByClassName("navbar-list-elem"));

function storeClick(){
    console.log("Store accessed");
    var main = document.getElementById("navbar-Id");
    main.style.backgroundColor='red';
}
function submitForm(){
    emailVal = document.getElementById("emailField").value;
    console.log("Email",emailVal);
    passwordVal = document.getElementById("passwordField").value;
    console.log("Pass",passwordVal);

    if(emailVal==="admin@123.com" && passwordVal==="123"){
        alert("Admin logged in.")
    }
}