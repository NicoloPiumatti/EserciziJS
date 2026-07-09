"option strict"

let n = Math.floor(Math.random()*20 + 1);
console.log(n);
let cont = 0;

function controlla(){
    let tent = document.getElementById("tent").value;
    if(tent === "" || tent === 0)
    {
        alert("Errore, inserire un numero tra 1 e 20");
        return;
    }
    if(tent > n)
    {
        alert("Numero troppo alto");
        cont++;
    } else if (tent < n)
    {
        alert("Numero troppo basso");
        cont++;
    } else
    {
        cont++;
        alert("Hai indovinato! Hai impiegato " + cont + " tentativi");
        return;
    }
}