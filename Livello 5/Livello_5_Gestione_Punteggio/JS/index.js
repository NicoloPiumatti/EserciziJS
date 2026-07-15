"use strict"

let container = document.createElement("div");
container.classList.add("container", "mt-3");
this.document.body.append(container);

let somma = 0, valore;

for(let i = 0; i < 3; i++)
{
    let row = document.createElement("div");
    row.classList.add("row");
    container.append(row);
    for(let j = 0; j < 3; j++)
    {
        let col = document.createElement("div");
        col.classList.add("col", "p-0");
        row.append(col);
        let cella = document.createElement("div");
        cella.setAttribute("id", "cella_" + i + "_" + j);
        cella.classList.add("h-100", "w-100", "border", "border-dark", "border-2", "p-3");
        cella.addEventListener("click", function () {
            valore = cella.innerText = Math.floor(Math.random() * 2 + 0);
            somma = somma + valore;
            console.log(somma);
        });
        col.append(cella);
    }
}