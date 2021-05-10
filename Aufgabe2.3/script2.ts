namespace Aufgabe2_3 {


    function createWaffleOptions(_waffel: Waffel): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "150px";
        let waffelbild: HTMLImageElement = document.createElement("img");
        waffelbild.src = _waffel.waffelbild;
        waffelbild.style.width = "100%";
        div.appendChild(waffelbild);
        let chooseButton: HTMLElement = document.createElement("Button");
        let textChooseButton: Text = document.createTextNode(_waffel.waffelart);
        chooseButton.appendChild(textChooseButton);
        document.body.appendChild(chooseButton);
        chooseButton.addEventListener("click", waffelspeichern);
        chooseButton.dataset.waffelart = _waffel.waffelart;
        return div;
    }

    for (let i: number = 0; i < alleWaffeln.length; i++) {
        let waffleElements: HTMLElement = createWaffleOptions(alleWaffeln[i]);
        document.body.appendChild(waffleElements);
        console.log(waffleElements);
        

    }

    function waffelspeichern(_input: MouseEvent): void {
        let output: HTMLElement = <HTMLElement>_input.target;
        console.log(output.dataset.waffelart);

        
    }
}
