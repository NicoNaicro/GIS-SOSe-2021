"use strict";
let button = document.getElementById("submit");
button.onclick =
    async function senddata() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://gissigassi.herokuapp.com";
        _url += "/sendData";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let answer = await fetch(_url);
        console.log(answer);
    };
let time = sessionStorage.getItem("time");
let timeDOM = document.getElementById("showtime");
timeDOM.value = time;
//# sourceMappingURL=deinZeit.js.map