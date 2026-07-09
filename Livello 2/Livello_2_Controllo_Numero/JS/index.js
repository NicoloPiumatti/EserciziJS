"option strict"

function controlla(){
    let n = document.getElementById("num").value;
    if(n > 0)
    {
        alert("Il numero inserito è positivo");
    } else if(n < 0)
    {
        alert("Il numero inserito è negativo");
    } else
        alert("Il numero inserito è uguale a zero")
}