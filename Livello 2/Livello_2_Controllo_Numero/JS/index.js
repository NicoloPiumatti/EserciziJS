"use strict"

function controlla(){
    let n = document.getElementById("num").value;
    if(n > 0)
    {
        console.log("Il numero inserito è positivo");
    } else if(n < 0)
    {
        console.log("Il numero inserito è negativo");
    } else
        console.log("Il numero inserito è uguale a zero")
}