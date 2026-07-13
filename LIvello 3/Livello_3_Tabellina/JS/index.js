"use strict"

function visualizza(){
    let n = document.getElementById("n").value;
    let tab = 0;
    for(let i = 1; i < 11; i++)
    {
        tab = n * i;
        console.log(tab);
        tab = 0;
    }
}