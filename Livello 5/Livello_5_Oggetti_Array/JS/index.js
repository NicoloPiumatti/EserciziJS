"use strict"

let array = ["nave1", "nave2", "elemNas1", "elemNas2", "elemNas3", "nave3", "nave4", "elemNas4", "nave5"];

let container = document.createElement("div");
container.classList.add("container", "mt-3");
this.document.body.append(container);

let btnArray = document.createElement("button");
btnArray.innerText = "Mostra";
btnArray.classList.add("btn");
btnArray.style.borderColor = "black";
btnArray.style.margin = "20px";
container.append(btnArray);

let btnStato = document.createElement("button");
btnStato.innerText = "Aggiorna stato";
btnStato.classList.add("btn");
btnStato.style.borderColor = "black";
btnStato.style.margin = "20px";
container.append(btnStato);

for (let i = 0; i < 3; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  container.append(row);
  for (let j = 0; j < 3; j++) {
    let col = document.createElement("div");
    col.classList.add("col", "p-0");
    row.append(col);
    let cella = document.createElement("div");
    cella.setAttribute("id", "cella_" + i + "_" + j);
    cella.classList.add("h-100", "w-100", "border", "border-dark", "border-2", "p-3");
    btnArray.addEventListener("click", function(){
      console.log(array);
    });
    btnStato.addEventListener("click", function(){
      console.log("Stato aggiornato, gli elementi nascosti sono stati trovati");
    })
    col.append(cella);
  }
}