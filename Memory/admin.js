"use strict";
let gridcontainer = document.getElementById("admingrid");
let images = gridcontainer.querySelectorAll("img");
let imageurls = JSON.parse(sessionStorage.getItem("images"));
for (let index = 0; index < images.length; index++) {
    const image = images[index];
    image.setAttribute("onclick", `changeimage(${index})`);
    showimage(index);
}
function changeimage(index) {
    let input = prompt("Bitte geben sie die URL des Bildes an");
    if (input != null) {
        imageurls[index] = input;
        sessionStorage.setItem("images", JSON.stringify(imageurls));
        showimage(index);
    }
}
function showimage(index) {
    const image = images[index];
    image.src = imageurls[index];
}
//# sourceMappingURL=admin.js.map