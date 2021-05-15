"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    let alleObjekte = JSON.parse(Aufgabe2_4.eisJSON);
    function createOptions(_part) {
        let div = document.createElement("div");
        div.style.maxWidth = "150px";
        let waffelbild = document.createElement("img");
        waffelbild.src = _part.bild;
        waffelbild.style.width = "100%";
        div.appendChild(waffelbild);
        let chooseButton = document.createElement("Button");
        let textChooseButton = document.createTextNode(_part.titel);
        chooseButton.appendChild(textChooseButton);
        document.body.appendChild(chooseButton);
        chooseButton.addEventListener("click", speichern);
        chooseButton.dataset.speicherart = _part.titel;
        chooseButton.dataset.speicherbild = _part.bild;
        return div;
    }
    if (document.querySelector("title").getAttribute("id") == "ersteseite") {
        for (let i = 0; i < alleObjekte.waffeln.length; i++) {
            let eiselemente = createOptions(alleObjekte.waffeln[i]);
            document.body.appendChild(eiselemente);
            console.log(eiselemente);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "zweiteseite") {
        for (let i = 0; i < alleObjekte.kugeln.length; i++) {
            let eiselemente = createOptions(alleObjekte.kugeln[i]);
            document.body.appendChild(eiselemente);
            console.log(eiselemente);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "dritteseite") {
        for (let i = 0; i < alleObjekte.sahne.length; i++) {
            let eiselemente = createOptions(alleObjekte.sahne[i]);
            document.body.appendChild(eiselemente);
            console.log(eiselemente);
        }
    }
    function speichern(_input) {
        let output = _input.target;
        if (document.querySelector("title").getAttribute("id") == "ersteseite") {
            console.log(output.dataset.speicherart);
            localStorage.setItem("deinewaffel", output.dataset.speicherart);
            localStorage.setItem("deinwaffelbild", output.dataset.speicherbild);
            // console.log(localStorage.getItem("deinewaffel"));
            //console.log(localStorage.getItem("deinwaffelbild")); 
        }
        if (document.querySelector("title").getAttribute("id") == "zweiteseite") {
            console.log(output.dataset.speicherart);
            localStorage.setItem("deinekugel", output.dataset.speicherart);
            localStorage.setItem("deinkugelbild", output.dataset.speicherbild);
            // console.log(localStorage.getItem("deinewaffel"));
            //console.log(localStorage.getItem("deinwaffelbild")); 
        }
        if (document.querySelector("title").getAttribute("id") == "dritteseite") {
            console.log(output.dataset.speicherart);
            localStorage.setItem("deinesahne", output.dataset.speicherart);
            localStorage.setItem("deinsahnebild", output.dataset.speicherbild);
            // console.log(localStorage.getItem("deinewaffel"));
            //console.log(localStorage.getItem("deinwaffelbild")); 
        }
    }
    if (document.querySelector("title").getAttribute("id") == "zweiteseite") {
        let div = document.createElement("div");
        div.style.maxWidth = "250px";
        document.body.appendChild(div);
        let waffelbild = document.createElement("img");
        waffelbild.src = localStorage.getItem("deinwaffelbild");
        waffelbild.style.width = "100%";
        div.appendChild(waffelbild);
    }
    if (document.querySelector("title").getAttribute("id") == "dritteseite") {
        let div = document.createElement("div");
        div.style.maxWidth = "250px";
        document.body.appendChild(div);
        let kugelbild = document.createElement("img");
        kugelbild.src = localStorage.getItem("deinkugelbild");
        kugelbild.style.width = "100%";
        div.appendChild(kugelbild);
        let waffelbild = document.createElement("img");
        waffelbild.src = localStorage.getItem("deinwaffelbild");
        waffelbild.style.width = "100%";
        div.appendChild(waffelbild);
    }
    if (document.querySelector("title").getAttribute("id") == "vierteseite") {
        let div = document.createElement("div");
        div.style.maxWidth = "250px";
        document.body.appendChild(div);
        let sahnebild = document.createElement("img");
        sahnebild.src = localStorage.getItem("deinsahnebild");
        sahnebild.style.width = "100%";
        div.appendChild(sahnebild);
        let kugelbild = document.createElement("img");
        kugelbild.src = localStorage.getItem("deinkugelbild");
        kugelbild.style.width = "100%";
        div.appendChild(kugelbild);
        let waffelbild = document.createElement("img");
        waffelbild.src = localStorage.getItem("deinwaffelbild");
        waffelbild.style.width = "100%";
        div.appendChild(waffelbild);
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script2.js.map