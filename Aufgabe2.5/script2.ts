namespace Aufgabe2_5 {


    function createOptions(_part: Inhalt): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "150px";
        let waffelbild: HTMLImageElement = document.createElement("img");
        waffelbild.src = _part.bild;
        waffelbild.style.width = "100%";
        div.appendChild(waffelbild);
        let chooseButton: HTMLElement = document.createElement("Button");
        let textChooseButton: Text = document.createTextNode(_part.titel);
        chooseButton.appendChild(textChooseButton);
        document.body.appendChild(chooseButton);
        chooseButton.addEventListener("click", speichern);
        chooseButton.dataset.speicherart = _part.titel;
        chooseButton.dataset.speicherbild = _part.bild;
        return div;


    }
    function auswahl(alleObjekte: Eis): void {
        if (document.querySelector("title").getAttribute("id") == "ersteseite") {
            for (let i: number = 0; i < alleObjekte.waffeln.length; i++) {
                let eiselemente: HTMLElement = createOptions(alleObjekte.waffeln[i]);
                document.body.appendChild(eiselemente);
                console.log(eiselemente);
            }

        }
        if (document.querySelector("title").getAttribute("id") == "zweiteseite") {
            for (let i: number = 0; i < alleObjekte.kugeln.length; i++) {
                let eiselemente: HTMLElement = createOptions(alleObjekte.kugeln[i]);
                document.body.appendChild(eiselemente);
                console.log(eiselemente);
            }

        }
        if (document.querySelector("title").getAttribute("id") == "dritteseite") {
            for (let i: number = 0; i < alleObjekte.sahne.length; i++) {
                let eiselemente: HTMLElement = createOptions(alleObjekte.sahne[i]);
                document.body.appendChild(eiselemente);
                console.log(eiselemente);
            }

        }
    }
    function speichern(_input: MouseEvent): void {
        let output: HTMLElement = <HTMLElement>_input.target;

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
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "250px";
        document.body.appendChild(div);


        let waffelbild: HTMLImageElement = document.createElement("img");
        waffelbild.src = localStorage.getItem("deinwaffelbild");
        waffelbild.style.width = "100%";
        div.appendChild(waffelbild);
    }
    if (document.querySelector("title").getAttribute("id") == "dritteseite") {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "250px";
        document.body.appendChild(div);

        let kugelbild: HTMLImageElement = document.createElement("img");
        kugelbild.src = localStorage.getItem("deinkugelbild");
        kugelbild.style.width = "100%";
        div.appendChild(kugelbild);

        let waffelbild: HTMLImageElement = document.createElement("img");
        waffelbild.src = localStorage.getItem("deinwaffelbild");
        waffelbild.style.width = "100%";
        div.appendChild(waffelbild);
    }
    if (document.querySelector("title").getAttribute("id") == "vierteseite") {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "250px";
        document.body.appendChild(div);
        let sahnebild: HTMLImageElement = document.createElement("img");
        sahnebild.src = localStorage.getItem("deinsahnebild");
        sahnebild.style.width = "100%";
        div.appendChild(sahnebild);


        let kugelbild: HTMLImageElement = document.createElement("img");
        kugelbild.src = localStorage.getItem("deinkugelbild");
        kugelbild.style.width = "100%";
        div.appendChild(kugelbild);

        let waffelbild: HTMLImageElement = document.createElement("img");
        waffelbild.src = localStorage.getItem("deinwaffelbild");
        waffelbild.style.width = "100%";
        div.appendChild(waffelbild);
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response", response);
        let s: Eis = await response.json();
        console.log(s);
        auswahl(s);

    }
    communicate("https://github.com/NicoNaicro/GIS-SOSe-2021/blob/main/Aufgabe2.5/data.json");

}
