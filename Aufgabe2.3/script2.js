"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    function createWaffleOptions(_waffel) {
        let div = document.createElement("div");
        div.style.maxWidth = "150px";
        let waffelbild = document.createElement("img");
        waffelbild.src = _waffel.waffelbild;
        waffelbild.style.width = "100%";
        div.appendChild(waffelbild);
        let chooseButton = document.createElement("Button");
        let textChooseButton = document.createTextNode(_waffel.waffelart);
        chooseButton.appendChild(textChooseButton);
        document.body.appendChild(chooseButton);
        chooseButton.addEventListener("click", waffelspeichern);
        chooseButton.dataset.waffelart = _waffel.waffelart;
        return div;
    }
    for (let i = 0; i < Aufgabe2_3.g.length; i++) {
        let waffleElements = createWaffleOptions(Aufgabe2_3.g.Kugel[i]);
        document.body.appendChild(waffleElements);
        console.log(waffleElements);
    }
    function waffelspeichern(_input) {
        let output = _input.target;
        console.log(output.dataset.waffelart);
    }
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script2.js.map