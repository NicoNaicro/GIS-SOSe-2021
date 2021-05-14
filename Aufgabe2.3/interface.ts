namespace Aufgabe2_3 {


    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");

    export interface Eis {
        waffel: Waffel;
        kugel: Kugel;
        sahne: Sahne;

    }
    export interface Waffel {
        waffelbild: string;
        waffelart: string;

    }

    export interface Kugel {
        kugelbild: string;
        kugelsorte: string;


    }
    export interface Sahne {
        sahnebild: string;
        sahneform: string;


    }



}

