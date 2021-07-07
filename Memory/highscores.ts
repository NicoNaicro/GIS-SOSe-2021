class HighscoreList {
    highscores: Array<Highscore>;

    constructor() {
        this.highscores = new Array(0);
        this.fetchdata();

    }
    async fetchdata(): Promise<void> {    //Nimmt Daten aus Datenbank und erstellt Highscores mit Name und Zeit
        await getdata().then(data =>
            data.forEach(element =>
                this.insert(new Highscore(element.name.trim(), parseInt(element.zeit.trim())))
            )
        );
        this.show();
    }

    insert(highscore: Highscore): void {    //fügt Element hinzu, sortiert es und löscht Element wenn mehr als 10
        this.highscores.push(highscore);
        this.highscores.sort((a, b) => a.time - b.time);
        if (this.highscores.length > 10) {
            this.highscores.pop();
        }
    }

    show(): void {    //Erstellt für jeden Highscore ein Listenelement
        let scoreListDOM: HTMLElement = document.getElementById("highscores");
        scoreListDOM.innerHTML = "";
        this.highscores.forEach(highscore => {
            let nameLabel: HTMLElement = document.createElement("label");
            nameLabel.textContent = highscore.name;
            let timeLabel: HTMLElement = document.createElement("label");
            timeLabel.textContent = highscore.get_time_in_minutes();
            let highscoreItem: HTMLElement = document.createElement("li");
            highscoreItem.appendChild(nameLabel);
            highscoreItem.appendChild(timeLabel);
            scoreListDOM.appendChild(highscoreItem);
        });
    }
}
async function getdata(): Promise<Array<any>> {

    let _url: RequestInfo = "https://gissigassi.herokuapp.com";
    _url += "/getData";
    let answer: Response = await fetch(_url);
    let output: string = await answer.text();

    return Promise.resolve(JSON.parse(output));
}
class Highscore {
    name: string;
    time: number;

    constructor(name: string, time: number) {
        this.name = name;
        this.time = time;
    }

    get_time_in_minutes(): string {   ///
        let padding: string = this.time % 60 < 10 ? "0" : "";
        return `${Math.floor(this.time / 60)}:${padding}${this.time % 60}`;
    }
}


let highscores: HighscoreList = new HighscoreList();
