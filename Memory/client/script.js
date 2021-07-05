"use strict";
var Memory;
(function (Memory) {
    let displayResponse = document.getElementById("answer");
    async function senddata() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://gissigassi.herokuapp.com";
        _url += "/sendData";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let answer = await fetch(_url);
        console.log(answer);
    }
    async function getdata() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://gissigassi.herokuapp.com";
        _url += "/getData";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let answer = await fetch(_url);
        let output = await answer.text();
        displayResponse.innerHTML = output;
    }
    document.getElementById("sendbutton").addEventListener("click", senddata);
    document.getElementById("getbutton").addEventListener("click", getdata);
})(Memory || (Memory = {}));
//# sourceMappingURL=script.js.map