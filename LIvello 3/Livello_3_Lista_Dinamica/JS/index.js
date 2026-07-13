"use strict"

function aggiungiRiga() {
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let eta = document.getElementById("eta").value;
    if (nome === "" || cognome === "" || eta === "") {
        console.log("Caricamento effettuato in modo errato, riprovare");
        return;
    } else {
        let tabella = document.querySelector(".table"); 
        let tr = document.createElement("tr");
        let tdN = document.createElement("td");
        let tdC = document.createElement("td");
        let tdE = document.createElement("td");
        tdN.innerText = nome;
        tdC.innerText = cognome;
        tdE.innerText = eta;
        tr.append(tdN);
        tr.append(tdC);
        tr.append(tdE);
        tabella.append(tr);
    }
}