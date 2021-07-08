class Grid {
    open: Card;
    cards: Array<Card>;
    pairs: number;

    constructor() {
        this.pairs = 0;
        let positions = [];
        let size: number = 4;
        for (let i: number = 0; i < size * size; i++) {
            let x: number = i % size
            let y: number = Math.floor(i / size);
            positions.push([x, y]);
        }
        this.cards = new Array();
        let images: string[] = JSON.parse(sessionStorage.getItem("images"));
        while (positions.length > 0) {

            let index: number = Math.floor(Math.random() * images.length);
            let imageURL: string = images[index];
            images.splice(index, 1);

            index = Math.floor(Math.random() * positions.length);
            let pos: number[] = positions[index];
            positions.splice(index, 1);
            let card1: Card = new Card(pos[0], pos[1]);

            index = Math.floor(Math.random() * positions.length);
            pos = positions[index];
            positions.splice(index, 1);
            let card2: Card = new Card(pos[0], pos[1]);

            card1.foreground = imageURL;
            card2.foreground = imageURL;
            card1.partner = card2;
            card2.partner = card1;

            this.cards.push(card1);
            this.cards.push(card2);
        }
    }

    show(x: number, y: number): boolean {
        let card: Card = this.cards.find((card) => card.x == x && card.y == y);

        if (card.open) {
            return false;
        }

        card.show();

        let tmpOpen: Card = this.open;
        if (this.open == null) {
            this.open = card
        } else {
            if (this.open.partner == card) {
                this.pairs += 1;
            } else {

                setTimeout(() => card.hide(), 500);
                setTimeout(() => tmpOpen.hide(), 500);
            }
            this.open = null;
        }

        return this.pairs == 8;
    }
}

class Card {
    foreground: string;
    background: string;
    x: number;
    y: number;
    open: boolean;
    partner: Card;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.foreground = "";
        this.background = "rückseite.png";
    }

    show(): void {
        console.log("show");
        
        let gameGrid: HTMLElement = document.getElementById("gamegrid");
        let cardImg: HTMLImageElement = gameGrid.querySelectorAll("img")[this.x + this.y * 4];
        cardImg.src = this.foreground;
        cardImg.alt = this.foreground;
        this.open = true;
    }

    hide(): void {
        let gameGrid: HTMLElement = document.getElementById("gamegrid");
        let cardImg: HTMLImageElement = gameGrid.querySelectorAll("img")[this.x + this.y * 4];
        cardImg.src = this.background;
        this.open = false;
    }
}

class Timer {
    seconds: number;
    running: boolean;
    id: number;

    start(id: number): void {
        this.seconds = 0;
        this.id = id;
        this.running = true;
        this.update(id);
    }

    update(id: number): void {
        if (this.running && this.id == id) {
            this.seconds += 1;
            let timeDOM: HTMLElement = document.getElementById("timebutton");
            let padding: string = this.seconds % 60 < 10 ? "0" : "";
            timeDOM.textContent = `DEINE ZEIT: ${Math.floor(this.seconds / 60)}:${padding}${this.seconds % 60}`;
            setTimeout(() => this.update(id), 1000);
        }
    }

    stop(): void {
        this.running = false;
    }
}




let timer: Timer = new Timer()
let timerID: number = 0;
let running: boolean = false;
let grid: Grid = new Grid();

function startGame(): void {
    console.log("start");
    timer.start(timerID);
    running = true;
    timerID += 1;
}

function show(x: number, y: number): void {
    if (running) {
        if (grid.show(x, y)) {
            finished();
        }
    }
}

function finished(): void {
    timer.stop();
    sessionStorage.setItem("time", timer.seconds.toString());
    window.open("deinezeit.html", "_self");
}
