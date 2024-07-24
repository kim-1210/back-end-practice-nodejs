"use strict";

const id = document.querySelector("#login__username"),
pw = document.querySelector('#login__password'),
loginbtn = document.querySelector('#loginbtn');

loginbtn.addEventListener('click', login);

function login(){
    const req = {
        id : id.value,
        pw : pw.value,
    };

    fetch('http://localhost:8080/login_check', {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
    .then((response) => {
        console.log("response:", response)
        return response.json()
    })
    .then((data) =>{
        document.querySelector('#result').textContent = data.message;
        console.log(data)
        setTimeout(2000);
        if(data.result){
            location.href = '/after_login';
        }
    })
    .catch((error) => console.log("error:", error));
}