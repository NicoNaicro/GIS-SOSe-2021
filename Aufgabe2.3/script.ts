namespace Aufgabe2_3 {

let addRecButton: HTMLElement = document.createElement("Button");
let textRecButton: Text = document.createTextNode("Rechteck");
addRecButton.style.backgroundColor = "green";
addRecButton.appendChild(textRecButton);
document.body.appendChild(addRecButton);
addRecButton.id = "RecButtId";

let resetWindowButton: HTMLElement = document.createElement("Button");
resetWindowButton.style.backgroundColor = "red";
let textWinButton: Text = document.createTextNode("Zurücksetzen");
resetWindowButton.id = "resetButtId";

resetWindowButton.appendChild(textWinButton);
document.body.appendChild(resetWindowButton);

document.getElementById("RecButtId").addEventListener("click", createDivRec);
document.getElementById("resetButtId").addEventListener("click", resetWindow);


function resetWindow(): void {
    window.location.reload();
}

function createDivRec(): void {

    let colors: String[] = ["blue", "magenta", "red", "yellow", "green", "purple", "orange", "turquoise"];
    let previousElement: HTMLElement = document.body;
    
    let div: HTMLDivElement = document.createElement("div");
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

for (let i: number = 0; i < 5; i++) {
    createDivRec();
}

}
