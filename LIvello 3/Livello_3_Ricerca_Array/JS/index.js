"use strict"

let array = ["Parigi", "Spada", "Mario", "Roma", "Lampada", "Gandalf", "Londra", "Libro", "Sherlock Holmes", "New York", "Chitarra", "Wonder Woman", "Tokyo", "Bicicletta", "Darth Vader", "Barcellona", "Zaino", "Harry Potter", "Sydney", "Orologio"];

window.onload = function(){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] + " (Pos n_" + i + ")");
    }
    let btn = document.getElementById("btn");
    if (btn) {
        btn.onclick = ricerca;
    }
}

function ricerca(){
    let nome = document.getElementById("nome").value;
    for(let i = 0; i < array.length; i++)
    {
        if(nome === array[i])
        {
            console.log("Elemento trovato in pos " + i + "!");
            return;
        }
    }
}