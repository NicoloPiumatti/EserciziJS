"use strict";

let array = ["acqua", "colpito", "colpito", "colpito", "acqua", "acqua", "colpito", "acqua", "colpito", "acqua", "acqua"];

window.onload = function() {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    let button = document.getElementById("btn");
    if (button) {
        button.onclick = colpito;
    }
}

function colpito() {
    let conta = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "colpito") {
            conta++;
        }
    }
    console.log("La parola 'colpito' è stata trovata " + conta + " volte");
    alert("Esecuzione completata con successo. Trovati: " + conta);
}