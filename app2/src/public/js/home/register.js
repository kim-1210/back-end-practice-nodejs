"use strict";

const id = document.querySelector('#id'),
pw = document.querySelector('#pw'),
btn = document.querySelector('#register_btn');

btn.addEventListener('click', register_enter);

function register_enter(){
    const req = {
        id : id.value,
        pw : pw.value,
    };

    fetch('http://localhost:8080/register_save', {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
    .then((res) =>{
        return res.json();
    })
    .then((data) =>{
        document.querySelector('#result').innerHTML = data.message;
        setTimeout(2000);
        if(data.result){
            location.href = '/';
        }
    })
    .catch((error) => {
        console.log('errer : ', error)
    })
}