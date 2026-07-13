"use strict"

let n = Math.floor(Math.random()*20 + 1);
let cont = 0;

function controlla(){
    let tent = document.getElementById("tent").value;
    if(tent === "" || tent === 0)
    {
        console.log("Errore, inserire un numero tra 1 e 20");
        return;
    }
    if(tent > n)
    {
        console.log("Numero troppo alto");
        cont++;
    } else if (tent < n)
    {
        console.log("Numero troppo basso");
        cont++;
    } else
    {
        cont++;
        console.log("Hai indovinato! Hai impiegato " + cont + " tentativi");
        return;
    }
}