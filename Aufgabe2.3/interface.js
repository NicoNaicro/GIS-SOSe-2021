"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    //Aufgabe 2
    Aufgabe2_3.canvas = document.getElementById("myFirstCanvas");
    function neuesBild() {
        let previousElement = document.body;
        let div = document.createElement("div");
        div.style.backgroundImage = "url('eis.png')";
        previousElement.appendChild(div);
        previousElement = div;
    }
    console.log(neuesBild);
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=interface.js.map