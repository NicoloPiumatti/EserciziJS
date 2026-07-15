"use strict"

for(let i = 1; i < 11; i++)
{
    let btn = document.createElement("button");
    btn.setAttribute("id", "btn_" + i);
    btn.classList.add("btn");
    btn.style.height = "20px";
    btn.style.width = "20px";
    btn.style.borderRadius = "10px";
    btn.style.borderColor = "black";
    btn.style.margin = "10px";
    btn.addEventListener("click", function(){
        console.log(i);
    })
    this.document.body.append(btn);
}