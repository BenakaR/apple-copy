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
function calcc(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    operation = document.getElementById("options").value;

    var result = 0;
    switch (operation){
        case 'add':
            result = num1 + num2;
            console.log("Result of Addition is ",result);
            break;
        case 'sub':
            result = num1 - num2;
            console.log("Result of Subtraction is ",result);
            break;
        case 'mul':
            result = num1 * num2;
            console.log("Result of Multiplication is ",result);
            break;
        case 'div':
            result = num1 / num2;
            console.log("Result of Division is ",result);
            break;
    }
    document.getElementById("mainResult").innerHTML = result;
}
