"use strict"

function verifica(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if(name === "" || email === "" || message === "")
    {
        console.log("Compilare i campi lasciati vuoti!");
        return;
    } else
        console.log("Compilazione completata, ecco Nome: " + name + " / Email: " + email + " / Message: " + message);
}