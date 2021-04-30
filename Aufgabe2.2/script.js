"use strict";
// Aufgabe 1 a)
console.log("Aufgabe 1a)");
function min(werte) {
    let min = werte[0];
    for (let i = 0; i < werte.length; i++) {
        if (werte[i] < min) {
            min = werte[i];
        }
    }
    console.log(min);
}
min([2, 3, 54, 32]);
//Aufgabe 1b)
console.log("Aufgabe 1b)");
function iseven(eingabe) {
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
let p1 = {
    vorname: "Benjamin",
    nachname: "Maier",
    alter: 19
};
let p2 = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 21
};
let p3 = {
    vorname: "Tim",
    nachname: "Müller",
    alter: 22
};
let p4 = neuePerson("alex", "mauer", 34);
console.log(p4.vorname);
console.log(p4.alter);
console.log("______________________");
function neuePerson(vorname1, nachname1, alter1) {
    let p = { vorname: vorname1, nachname: nachname1, alter: alter1 };
    return p;
}
let allePersonen = [];
allePersonen.push(p1);
allePersonen.push(p2);
allePersonen.push(p3);
function showInfo(Person) {
    console.log(Person.vorname);
    console.log(Person.nachname);
    console.log(Person.alter);
}
showInfo(p1);
showInfo(p2);
showInfo(p3);
console.log("______________________");
// Aufgabe 2 a)
console.log("Aufgabe 2a)");
let array = [0, 1, 2, 3].reverse();
console.log("Reversed array is : " + array);
function backwards(umgedreht) {
    let array = [];
    for (let i = umgedreht.length - 1; i >= 0; i--) {
        array.push(umgedreht[i]);
    }
    console.log(array);
}
backwards([2, 3, 54, 32]);
// b)
console.log("Aufgabe 2b)");
function join(arrayeins, arrayzwei) {
    for (let i = 0; i <= arrayzwei.length; i++) {
        arrayeins.push(arrayzwei[i]);
    }
    return arrayeins;
}
console.log(join([15, 34, -32], [15, 56, -4]));
// c)
console.log("Aufgabe 2c)");
function split(teilen, splitter1, splitter2) {
    return teilen.slice(splitter1, splitter2);
}
console.log("unbeschnittene:");
console.log([2, 3, 5, 84, 32]);
console.log(split([2, 3, 5, 84, 32], 0, 2));
// Aufgabe 3a)
let canvas = document.getElementById("myFirstCanvas");
let context = canvas.getContext("2d");
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
let pathTree = new Path2D();
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
let wolke = new Path2D();
wolke.arc(110, 25, 45, 0, 2.5 * Math.PI);
context.fillStyle = "#FFFFFF";
context.fill(wolke);
let wolke2 = new Path2D();
wolke2.arc(50, 20, 30, 0, 2.5 * Math.PI);
context.fillStyle = "#FFFFFF";
context.fill(wolke2);
let wolke3 = new Path2D();
wolke3.arc(150, 20, 30, 0, 2.5 * Math.PI);
context.fillStyle = "#FFFFFF";
context.fill(wolke3);
let wolke4 = new Path2D();
wolke4.arc(350, 20, 30, 0, 2.5 * Math.PI);
context.fillStyle = "#FFFFFF";
context.fill(wolke4);
let wolke5 = new Path2D();
wolke5.arc(385, 10, 15, 0, 2.5 * Math.PI);
context.fillStyle = "#FFFFFF";
context.fill(wolke5);
let wolke6 = new Path2D();
wolke6.arc(320, 10, 15, 0, 2.5 * Math.PI);
context.fillStyle = "#FFFFFF";
context.fill(wolke6);
//b)
let canvas2 = document.getElementById("mySecondCanvas");
let context2 = canvas2.getContext("2d");
context.lineWidth = 8;
//c) //d) //e)
function createRect() {
    let rechti = { xKoordinate: Math.floor(Math.random() * 501),
        yKoordinate: Math.floor(Math.random() * 501),
        breite: Math.floor(Math.random() * 501),
        höhe: Math.floor(Math.random() * 501) };
    return rechti;
}
function drawRect(_rechti) {
    context2.fillRect(_rechti.xKoordinate, _rechti.yKoordinate, _rechti.breite, _rechti.höhe);
}
let rectArray2 = [];
for (let i = 0; i < 5; i++) {
    rectArray2.push(createRect());
    drawRect(rectArray2[i]);
}
createRect();
//# sourceMappingURL=script.js.map