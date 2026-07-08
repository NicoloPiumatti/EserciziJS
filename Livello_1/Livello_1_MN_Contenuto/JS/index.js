"option strict"

let i = 0;

function MN(){
    if(i % 2 === 0)
    {
        document.getElementById("par").classList.remove("d-none");
    } else
        document.getElementById("par").classList.add("d-none");
    i++;
}