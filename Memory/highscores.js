"use strict";
class HighscoreList {
    constructor() {
        this.highscores = new Array(0);
        this.fetchdata();
    }
    async fetchdata() {
        await getdata().then(data => data.forEach(element => this.insert(new Highscore(element.name.trim(), parseInt(element.zeit.trim())))));
        this.show();
    }
    insert(highscore) {
        this.highscores.push(highscore);
        this.highscores.sort((a, b) => a.time - b.time);
        if (this.highscores.length > 10) {
            this.highscores.pop();
        }
    }
    show() {
        let scoreListDOM = document.getElementById("highscores");
        scoreListDOM.innerHTML = "";
        this.highscores.forEach(highscore => {
            let nameLabel = document.createElement("label");
            nameLabel.textContent = highscore.name;
            let timeLabel = document.createElement("label");
            timeLabel.textContent = highscore.get_time_in_minutes();
            let highscoreItem = document.createElement("li");
            highscoreItem.appendChild(nameLabel);
            highscoreItem.appendChild(timeLabel);
            scoreListDOM.appendChild(highscoreItem);
        });
    }
}
async function getdata() {
    let _url = "https://gissigassi.herokuapp.com";
    _url += "/getData";
    let answer = await fetch(_url);
    let output = await answer.text();
    return Promise.resolve(JSON.parse(output));
}
class Highscore {
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }
    get_time_in_minutes() {
        let padding = this.time % 60 < 10 ? "0" : "";
        return `${Math.floor(this.time / 60)}:${padding}${this.time % 60}`;
    }
}
let highscores = new HighscoreList();
//# sourceMappingURL=highscores.js.map