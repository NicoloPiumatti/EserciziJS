"use strict"

let countdown

function avvia(){
        let sec = document.getElementById("txt").value;
    countdown = setInterval(() => {
        document.getElementById("cronometro").innerText = sec;
        if(sec === 0)
        {
            alert("Il programma è finito");
            clearInterval(countdown);
        }
        sec--;
    }, 1000);
}