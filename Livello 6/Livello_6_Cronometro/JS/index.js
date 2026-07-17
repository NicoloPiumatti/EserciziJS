"use strict"

let ore = 0, min = 0, sec = 0;
let intervallo;

function avvia(){
    intervallo = setInterval(() => {
        if(sec != 60)
            sec++;
        if(sec == 60)
        {
            sec = 0;
            if(min != 60)
                min++;
        }
        if(min == 60)
        {
            min = 0;
            if(ore != 24)
                ore++;
        }
        if(ore == 24)
            ore = 0;
        document.getElementById("cronometro").innerText = "" + ore + ": " + min + ". " + sec;
    }, 1000);
}

function azzera(){
    clearInterval(intervallo);
    ore = 0;
    sec = 0;
    min = 0;
    document.getElementById("cronometro").innerText = "" + ore + ": " + min + ". " + sec;
}

function stop(){
    clearInterval(intervallo);
    intervallo = null;
}