namespace Aufgabe2_5 {


    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");

    export interface Inhalt {
        titel: string;
        bild: string;

    }
    export interface Eis {
        waffeln: Inhalt[];
        kugeln: Inhalt[];
        sahne: Inhalt[];

    }



}

