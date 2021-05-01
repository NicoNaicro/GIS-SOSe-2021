
// Aufgabe 1 a)
console.log("Aufgabe 1a)");

function min(werte: number[]): void {
    let min: number = werte[0];
    for (let i: number = 0; i < werte.length; i++) {
        if (werte[i] < min) {
            min = werte[i];
        }


    }
    console.log(min);
}
min([2, 3, 54, 32]);

//Aufgabe 1b)
console.log("Aufgabe 1b)");

function iseven(eingabe: number): void {

    if (eingabe % 2 == 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }


}
iseven(-6);

//Aufgabe 1c)
console.log("Aufgabe 1c)");

interface Person {
    vorname: string;
    nachname: string;
    alter: number;
}

let p1: Person = {
    vorname: "Benjamin",
    nachname: "Maier",
    alter: 19
};
let p2: Person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 21
};
let p3: Person = {
    vorname: "Tim",
    nachname: "Müller",
    alter: 22
};

let p4: Person = neuePerson("alex", "mauer", 34);
console.log(p4.vorname);
console.log(p4.alter);
console.log("______________________");




function neuePerson(vorname1: string, nachname1: string, alter1: number): Person {
    let p: Person = { vorname: vorname1, nachname: nachname1, alter: alter1 };
    return p;
}

let allePersonen: Person[] = [];
allePersonen.push(p1);
allePersonen.push(p2);
allePersonen.push(p3);

function showInfo(person: Person): void {
    console.log(person.vorname);
    console.log(person.nachname);
    console.log(person.alter);



}

showInfo(p1);
showInfo(p2);
showInfo(p3);

console.log("______________________");

// Aufgabe 2 a)
console.log("Aufgabe 2a)");

let array: number[] = [0, 1, 2, 3].reverse();
console.log("Reversed array is : " + array);

function backwards(umgedreht: number[]): void {
    let array: number[] = [];
    for (let i: number = umgedreht.length - 1; i >= 0; i--) {
        array.push(umgedreht[i]);
    }
    console.log(array);


}
backwards([2, 3, 54, 32]);


// b)
console.log("Aufgabe 2b)");


function join(arrayeins: number[], arrayzwei: number[]): number[] {

    for (let i: number = 0; i <= arrayzwei.length; i++) {
        arrayeins.push(arrayzwei[i]);
    }

    return arrayeins;
}
console.log(join([15, 34, -32], [15, 56, -4]));

// c)
console.log("Aufgabe 2c)");

function split(teilen: number[], splitter1: number, splitter2: number): number[] {
    return teilen.slice(splitter1, splitter2);

}
console.log("unbeschnittene:");

console.log([2, 3, 5, 84, 32]);

console.log(split([2, 3, 5, 84, 32], 0, 2));


// Aufgabe 3a)

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

context.lineWidth = 8;
context.fillStyle = "#2E9AFE";
context.fillRect(0, 0, 800, 420);
context.fillStyle = "#298A22";

context.fillRect(0, 360, 500, 60); //Haus
context.strokeRect(250, 240, 160, 120);

context.fillStyle = "#73614C"; //Tür
context.fillRect(345, 295, 40, 60);

context.fillStyle = "#3B0B0B"; //Baum
context.fillRect(100, 270, 23, 90);
let pathTree: Path2D = new Path2D();
pathTree.arc(110, 250, 45, 0, 2.5 * Math.PI);
context.fillStyle = "#21610B";
context.fill(pathTree);
context.strokeStyle = "#2161F";



context.beginPath(); //Dach
context.moveTo(200, 240);
context.fillStyle = "#3B0B0B";
context.lineTo(325, 100);
context.lineTo(450, 240);
context.closePath();
context.stroke();

// WOLKEN 
let wolke: Path2D = new Path2D();
wolke.arc(110, 25, 45, 0, 2.5 * Math.PI);
context.fillStyle = "#FFFFFF";
context.fill(wolke);


let wolke2: Path2D = new Path2D();
wolke2.arc(50, 20, 30, 0, 2.5 * Math.PI);
context.fillStyle = "#FFFFFF";
context.fill(wolke2);


let wolke3: Path2D = new Path2D();
wolke3.arc(150, 20, 30, 0, 2.5 * Math.PI);
context.fillStyle = "#FFFFFF";
context.fill(wolke3);

let wolke4: Path2D = new Path2D();
wolke4.arc(350, 20, 30, 0, 2.5 * Math.PI);
context.fillStyle = "#FFFFFF";
context.fill(wolke4);

let wolke5: Path2D = new Path2D();
wolke5.arc(385, 10, 15, 0, 2.5 * Math.PI);
context.fillStyle = "#FFFFFF";
context.fill(wolke5);

let wolke6: Path2D = new Path2D();
wolke6.arc(320, 10, 15, 0, 2.5 * Math.PI);
context.fillStyle = "#FFFFFF";
context.fill(wolke6);

//b)
let canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mySecondCanvas");
let context2: CanvasRenderingContext2D = canvas2.getContext("2d");

context.lineWidth = 8;

interface Rechteck {
    xKoordinate: number;
    yKoordinate: number;
    breite: number;
    höhe: number;
}

//c) //d) //e)

function createRect(): Rechteck {
    let rechti: Rechteck = {xKoordinate: Math.floor(Math.random() * 501), 
        yKoordinate: Math.floor(Math.random() * 501), 
        breite: Math.floor(Math.random() * 501), 
        höhe: Math.floor(Math.random() * 501)};
    return rechti;
}
function drawRect(_rechti: Rechteck): void {
    context2.fillRect(_rechti.xKoordinate, _rechti.yKoordinate, _rechti.breite, _rechti.höhe);
}
let rectArray2: Rechteck[] = [];

for (let i: number = 0; i < 5; i++) {
    rectArray2.push(createRect());
    drawRect(rectArray2[i]);
}
createRect();


