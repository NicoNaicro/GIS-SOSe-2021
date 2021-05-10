namespace Aufgabe2_3 {

    //Aufgabe 2
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


    export let alleWaffeln: Waffel[] = [{ waffelart: "schokowaffel", waffelbild: "braunwaffel.png" }, { waffelart: "mangowaffel", waffelbild: "orangewaffel.png" }, { waffelart: "erdbeerwaffel", waffelbild: "pinkwaffel.png" }];

    export let alleKugeln: Kugel [] = [{kugelsorte: "erdbeere", kugelbild: "erdbeere.png"}, {kugelsorte: "schoko", kugelbild: "braunwaffel.png"}, {kugelsorte: "mango", kugelbild: "orangewaffel.png"}];

    export let alleSahne: Sahne [] = [{sahneform: "groß", sahnebild: "sahne3.png"}, {sahneform: "mittel", sahnebild: "sahne2.png"}, {sahneform: "klein", sahnebild: "sahne1.png"}];
}