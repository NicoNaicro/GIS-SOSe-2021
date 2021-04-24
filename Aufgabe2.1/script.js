"use strict";
function a1() {
    let u = "Alles";
    console.log(u);
    func2();
    console.log(u);
    func1();
    console.log(u);
    func3();
}
a1();
function func1() {
    console.log("Klar?");
} //* a) Alles klar? Logo! man kann alle Buchstaben als Variablen benutzen, Zahlen hingegen nicht.
function func2() {
    console.log("Gute!");
}
function func3() {
    console.log("Logo!");
} //* c) 
//*Aufgabe 2 
//* Es werden alle zahlen von 9 bis 1 in der Konsole ausgegeben, da i immer um eins reduziert wird.
//*Aufgabe 3 a)
/*
function a2(): void {
    let i: string = "Alles";
    console.log(i);
    funca();
    console.log(i);
    funcb();
    console.log(u); ------- An der Stelle kann die Konsole u nicht finden.
    funcc();
}

a2();

function funca(): void {
    console.log("Klar?");
}
function funcb(): void {
    console.log("Gute!");
}
function funcc(): void {
    console.log("Logo!");
}
*/
//* Aufgbae 4 a)
//* 1. Hallo 2. Bla 3. Hallo 4. Blubb 5. - 6. Test
//* Bei einer lokalen Variable wie bei 4. (func2) wird das x für diese Funktion auf "Blubb" geändert jedoch wird nach 
//* dieser Ausführung wieder zum ursprünglichen "Hallo". Bei einer globalen wie bei func 3 wird die variable fest überschrieben und hat nun von fortan den Namen "Test".
//* Aufgabe 5 a)
function multiply() {
    let x = 5;
    let y = 5;
    console.log(y * x);
}
multiply();
//* b)
function max(x, y) {
    if (x > y) {
        console.log(x + " ist größer");
    }
    else {
        console.log(y + " ist größer");
    }
}
max(5, 3);
//* c)
let x = 1;
let y = 0;
while (x <= 100) {
    y += x;
    x++;
}
console.log(y);
//* d)
for (let i = 0; i < 10; i++) {
    // tslint:disable-next-line: typedef
    function randomnummer(max) {
        return Math.floor(Math.random() * max);
    }
    console.log(randomnummer(101));
}
//* e)
function factorial(n) {
    let x = 1;
    if (n < 1) {
        x = 1;
        console.log(x);
    }
    if (n > 1) {
        // tslint:disable-next-line: typedef
        for (let i = 1; i <= n; i++) {
            x = x * i;
        }
        console.log(x);
    }
}
factorial(10);
//* f)
function leapyears() {
    // tslint:disable-next-line: typedef
    for (let i = 1900; i <= 2021; i++) {
        if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
            console.log(i + " ist ein Schaltjahr!");
        }
    }
}
leapyears();
//* Aufgabe 6 a)
function raute() {
    let hashtag = "#";
    for (let i = 1; i <= 7; i++) {
        console.log(hashtag);
        hashtag = hashtag + "#";
    }
}
raute();
//* b)
function zahlen() {
    // tslint:disable-next-line: typedef
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log("Fizz");
        }
        if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
zahlen();
//* c)
function zahlen2() {
    // tslint:disable-next-line: typedef
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else {
            console.log(i);
        }
    }
}
zahlen2();
//* d)
function schach() {
    let schach1 = " # # # #";
    let schach2 = "# # # # ";
    for (let i = 1; i < 8; i++) {
        if (i % 2 != 0) {
            console.log(schach1);
        }
        if (i % 2 == 0) {
            console.log(schach2);
        }
    }
}
schach();
//* e)
function meinschach() {
    let leer = " ";
    let hashtag = "# # # #";
    for (let i = 1; i <= 7; i++) {
        console.log(hashtag);
        if (i % 2 != 0) {
            hashtag = hashtag + leer;
        }
        else {
            hashtag = leer + hashtag;
        }
    }
}
meinschach();
//# sourceMappingURL=script.js.map