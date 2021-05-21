"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
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
    function auswahl(alleObjekte) {
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
    }
    function speichern(_input) {
        let output = _input.target;
        if (document.querySelector("title").getAttribute("id") == "ersteseite") {
            console.log(output.dataset.speicherart);
            localStorage.setItem("deinewaffel", output.dataset.speicherart);
            localStorage.setItem("deinwaffelbild", output.dataset.speicherbild);
        }
        if (document.querySelector("title").getAttribute("id") == "zweiteseite") {
            console.log(output.dataset.speicherart);
            localStorage.setItem("deinekugel", output.dataset.speicherart);
            localStorage.setItem("deinkugelbild", output.dataset.speicherbild);
        }
        if (document.querySelector("title").getAttribute("id") == "dritteseite") {
            console.log(output.dataset.speicherart);
            localStorage.setItem("deinesahne", output.dataset.speicherart);
            localStorage.setItem("deinsahnebild", output.dataset.speicherbild);
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
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        let s = await response.json();
        console.log(s);
        auswahl(s);
    }
    communicate("https://niconaicro.github.io/GIS-SOSe-2021/Aufgabe2.5/data.json");
    async function Daten(_url) {
        let query = new URLSearchParams(localStorage);
        _url = _url + "?" + query.toString();
        let answer = await fetch(_url);
        let output = await answer.json();
        let displayResponse = document.getElementById("3c");
        if (output.error) {
            displayResponse.className = "Error";
            displayResponse.innerText = output.error;
        }
        else {
            displayResponse.className = "Message";
            displayResponse.innerText = output.Message;
        }
    }
    Daten("https://gis-communication.herokuapp.com");
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=script2.js.map