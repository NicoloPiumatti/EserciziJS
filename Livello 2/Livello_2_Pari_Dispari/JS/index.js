"option strict"

function pariOdispari(){
    let n = document.getElementById("parOdisp").value;
    if(n % 2 === 0)
    {
        console.log("Il numero inserito è pari");
    } else
        console.log("Il numero inserito è dispari");
}