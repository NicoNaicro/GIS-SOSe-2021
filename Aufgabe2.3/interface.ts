namespace Aufgabe2_3 {

//Aufgabe 2
export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");

export interface Eis {
    waffel: Waffel;
    kugel: Kugel;
    sahne: Sahne;
    
}
export interface Waffel {
    WaffelbildURL: string;
    farbe: string;
    
}

export interface Kugel {
    kugelbildURL: string;
    Sortenname: string;
    farbe: string;
    
}
export interface Sahne {
    sahnebildURL: string;
    Farbe: string;
    Preis: number;
}

function neuesBild(): void {

   
    let previousElement: HTMLElement = document.body;
    
    let div: HTMLDivElement = document.createElement("div");
    div.style.backgroundImage = "url('eis.png')";
    
    previousElement.appendChild(div);
    previousElement = div;

}
console.log(neuesBild);





}