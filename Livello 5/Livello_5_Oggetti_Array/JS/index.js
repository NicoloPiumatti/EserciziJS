"use strict"

const elementi = [
  {
    nome: "Nave 1",
    posizione: { riga: 2, colonna: 2 },
    colpita: false
  },
  {
    nome: "Nave 2",
    posizione: { riga: 0, colonna: 1 },
    colpita: false
  },
  {
    nome: "Nave 3",
    posizione: { riga: 1, colonna: 2 },
    colpita: false
  },
  {
    nome: "Nave 4",
    posizione: { riga: 2, colonna: 0 },
    colpita: false
  },
  {
    nome: "Gommone",
    posizione: { riga: 0, colonna: 0 },
    colpita: false
  },
  {
    nome: "Yacht",
    posizione: { riga: 2, colonna: 1 },
    colpita: false
  },
  {
    nome: "Motoscafo",
    posizione: { riga: 1, colonna: 0 },
    colpita: false
  },
  {
    nome: "Boa",
    posizione: { riga: 0, colonna: 2 },
    colpita: false
  },
  {
    nome: "Peschereccio",
    posizione: { riga: 1, colonna: 1 },
    colpita: false
  }
];

let container = document.createElement("div");
container.classList.add("container", "mt-3");
this.document.body.append(container);

for(let i = 0; i < 5; i++)
{
    let row = document.createElement("div");
    row.classList.add("row");
    container.append(row);
    for(let j = 0; j < 5; j++)
    {
        let col = document.createElement("div");
        col.classList.add("col", "p-0");
        row.append(col);
        let cella = document.createElement("div");
        cella.setAttribute("id", "cella_" + i + "_" + j);
        cella.classList.add("h-100", "w-100", "border", "border-dark", "border-2", "p-3");
        col.append(cella);
    }
}