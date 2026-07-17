"use strict"

let container = document.createElement("div");
container.classList.add("container", "mt-3");
this.document.body.append(container);

let cnt = 0;
let statoGioco = false;

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
        cella.addEventListener("click", function(){
            if(i == 0 && j == 0 && cnt < 3)
            {
                document.getElementById("cella_" + i + "_" + j).style.backgroundColor = "red";
                cnt++;
            } else if (i == 1 && j == 0 && cnt < 3)
            {
                document.getElementById("cella_" + i + "_" + j).style.backgroundColor = "red";
                cnt++;
            } else if (i == 2 && j == 0 && cnt < 3)
            {
                document.getElementById("cella_" + i + "_" + j).style.backgroundColor = "red";
                cnt++;
            } else if(i == 0 && j == 1 && cnt < 3)
            {
                document.getElementById("cella_" + i + "_" + j).style.backgroundColor = "red";
                cnt++;
            } else if(i == 0 && j == 2 && cnt < 3)
            {
                document.getElementById("cella_" + i + "_" + j).style.backgroundColor = "red";
                cnt++;
            } else if (i == 1 && j == 2 && cnt < 3)
            {
                document.getElementById("cella_" + i + "_" + j).style.backgroundColor = "red";
                cnt++;
            } else if(i == 2 && j == 2 && cnt < 3)
            {
                document.getElementById("cella_" + i + "_" + j).style.backgroundColor = "red";
                cnt++;
            } else if(i == 2 && j == 1 && cnt < 3)
            {
                document.getElementById("cella_" + i + "_" + j).style.backgroundColor = "red";
                cnt++;
            }
            if(cnt == 3 && statoGioco == false)
            {
                alert("Hai trovato la nave, hai vinto!");
                statoGioco = true;
            }
        });
        col.append(cella);
    }
}

let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = "Reset";
    btn.style.borderColor = "black";
    btn.style.margin = "10px";
    container.append(btn);
    btn.addEventListener("click", function () {
        console.log("Il gioco è stato resettato");
        cnt = 0;
        statoGioco = false;
        for(let i = 0; i < 3; i++)
        {
            for(let j = 0; j < 3; j++)
            {
                document.getElementById("cella_" + i + "_" + j).style.backgroundColor = "white";
            }
        }
    });
