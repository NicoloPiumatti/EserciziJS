"use strict"

let nCelleSpec = 0;
let countdown;

let container = document.createElement("div");
container.classList.add("container", "mt-3");
this.document.body.append(container);

for (let i = 0; i < 5; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.append(row);
    for (let j = 0; j < 5; j++) {
        let col = document.createElement("div");
        col.classList.add("col", "p-0");
        row.append(col);
        let cella = document.createElement("div");
        cella.setAttribute("id", "cella_" + i + "_" + j);
        cella.classList.add("h-100", "w-100", "border", "border-dark", "border-2", "p-3");
        cella.addEventListener("click", function () {
            if (i % 2 === 0 && j % 2 === 0) {
                document.getElementById("cella_" + i + "_" + j).style.backgroundColor = "blue";
                nCelleSpec++;
            }
        });
        col.append(cella);
    }
}

function avvia(){
    let sec = 30;
    countdown = setInterval(() => {
        document.getElementById("cronometro").innerText = sec;
        if(sec === 0)
        {
            alert("Il programma è finito");
            if(nCelleSpec === 0)
            {
                console.log("Non è stata trovata nessuna cella speciale");
            } else
                console.log("Sono state trovate " + nCelleSpec + " celle speciali");
            clearInterval(countdown);
        }
        sec--;
    }, 1000);
}