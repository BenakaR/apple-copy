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

    var table = document.getElementById("dataTable");
    var tableBody = document.getElementById("dataBody");

    var row = tableBody.insertRow();
    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);

    col1.innerHTML = emailVal;
    col2.innerHTML = passwordVal;

    document.getElementById("emailField").value = "";
    document.getElementById("passwordField").value = "";

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

function calcFact(){
    var num = parseInt(document.getElementById("factNum").value);
    var start = new Date().getTime();
    console.log("start: ",start);
    var result = 1;
    for(let i=1;i <= num;i++){
        result = result * i;
    }
    var end = new Date().getTime();
    console.log("End: ",end);

    var table = document.getElementById("dataTableFact");
    var tableBody = document.getElementById("dataBodyFact");

    var row = tableBody.insertRow();
    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);

    col1.innerHTML = num;
    col2.innerHTML = result;

    document.getElementById("resultFact").innerHTML = "Result = " + result;
    console.log("Factorial calculated for ",num," is ",result);
}