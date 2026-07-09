"option strict"

function pariOdispari(){
    let n = document.getElementById("parOdisp").value;
    if(n % 2 === 0)
    {
        alert("Il numero inserito è pari");
    } else
        alert("Il numero inserito è dispari");
}