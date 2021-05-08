"use strict";
let addRecButton = document.createElement("Button");
let textRecButton = document.createTextNode("Rechteck");
addRecButton.style.backgroundColor = "green";
addRecButton.appendChild(textRecButton);
document.body.appendChild(addRecButton);
addRecButton.id = "RecButtId";
let resetWindowButton = document.createElement("Button");
resetWindowButton.style.backgroundColor = "red";
let textWinButton = document.createTextNode("Zurücksetzen");
resetWindowButton.id = "resetButtId";
resetWindowButton.appendChild(textWinButton);
document.body.appendChild(resetWindowButton);
document.getElementById("RecButtId").addEventListener("click", createDivRec);
document.getElementById("resetButtId").addEventListener("click", resetWindow);
function resetWindow() {
    window.location.reload();
}
function createDivRec() {
    let colors = ["blue", "magenta", "red", "yellow", "green", "purple", "orange", "turquoise"];
    let previousElement = document.body;
    let div = document.createElement("div");
    div.style.height = (50 + (Math.random() * 451)).toString() + "px";
    div.style.width = (50 + (Math.random() * 451)).toString() + "px";
    div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)].toString();
    div.style.position = "absolute";
    div.style.left = (50 + (Math.random() * 451)).toString() + "px";
    div.style.right = (50 + (Math.random() * 451)).toString() + "px";
    div.classList.add("rectangle");
    previousElement.appendChild(div);
    previousElement = div;
}
for (let i = 0; i < 5; i++) {
    createDivRec();
}
//# sourceMappingURL=script.js.map