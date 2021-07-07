"use strict";
class Grid {
    constructor() {
        this.pairs = 0;
        let positions = [];
        let size = 4;
        for (let i = 0; i < size * size; i++) {
            let x = i % size;
            let y = Math.floor(i / size);
            positions.push([x, y]);
        }
        this.cards = new Array();
        let images = ["a", "b", "c", "d", "e", "f", "g", "h"];
        while (positions.length > 0) {
            let index = Math.floor(Math.random() * images.length);
            let imageURL = images[index];
            images.splice(index, 1);
            index = Math.floor(Math.random() * positions.length);
            let pos = positions[index];
            positions.splice(index, 1);
            let card1 = new Card(pos[0], pos[1]);
            index = Math.floor(Math.random() * positions.length);
            pos = positions[index];
            positions.splice(index, 1);
            let card2 = new Card(pos[0], pos[1]);
            card1.foreground = imageURL;
            card2.foreground = imageURL;
            card1.partner = card2;
            card2.partner = card1;
            this.cards.push(card1);
            this.cards.push(card2);
        }
    }
    show(x, y) {
        let card = this.cards.find((card) => card.x == x && card.y == y);
        if (card.open) {
            return false;
        }
        card.show();
        let tmpOpen = this.open;
        if (this.open == null) {
            this.open = card;
        }
        else {
            if (this.open.partner == card) {
                this.pairs += 1;
            }
            else {
                setTimeout(() => card.hide(), 500);
                setTimeout(() => tmpOpen.hide(), 500);
            }
            this.open = null;
        }
        return this.pairs == 8;
    }
}
class Card {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.foreground = "";
        this.background = "rückseite.png";
    }
    show() {
        let gameGrid = document.getElementById("gameGrid");
        let cardImg = gameGrid.querySelectorAll("tr")[this.y].querySelectorAll("th")[this.x].querySelector("img");
        cardImg.src = this.foreground;
        cardImg.alt = this.foreground;
        this.open = true;
    }
    hide() {
        let gameGrid = document.getElementById("gameGrid");
        let cardImg = gameGrid.querySelectorAll("tr")[this.y].querySelectorAll("th")[this.x].querySelector("img");
        cardImg.src = this.background;
        this.open = false;
    }
}
class Timer {
    start(id) {
        this.seconds = 0;
        this.id = id;
        this.running = true;
        this.update(id);
    }
    update(id) {
        if (this.running && this.id == id) {
            this.seconds += 1;
            let timeDOM = document.getElementById("buttonshape");
            let padding = this.seconds % 60 < 10 ? "0" : "";
            timeDOM.textContent = `DEINE ZEIT: ${Math.floor(this.seconds / 60)}:${padding}${this.seconds % 60}`;
            setTimeout(() => this.update(id), 1000);
        }
    }
    stop() {
        this.running = false;
    }
}
let timer = new Timer();
let timerID = 0;
let running = false;
let grid = new Grid();
function startGame() {
    console.log("start");
    timer.start(timerID);
    running = true;
    timerID += 1;
}
function show(x, y) {
    if (running) {
        if (grid.show(x, y)) {
            finished();
        }
    }
}
function finished() {
    timer.stop();
    sessionStorage.setItem("time", timer.seconds.toString());
    window.open("deinezeit.html", "_self");
}
//# sourceMappingURL=game.js.map