"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2Server = void 0;
const Http = require("http");
const Url = require("url");
var P_3_2Server;
(function (P_3_2Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT); //neue Variable um sich mit Server zu verbinden
    if (!port)
        port = 8100; //dem Port 8100 zuweisen
    let server = Http.createServer(); //den Server erstellen
    server.addListener("request", handleRequest); //Eventlistener hinzufügen
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "/html") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                for (let key in url.query) {
                    _response.write("<p>" + key + ":" + url.query[key] + "</p>");
                }
            }
            else if (path == "/json") {
                _response.setHeader("content-type", "application/json");
                let sentObject = JSON.stringify(url.query);
                console.log(sentObject);
                _response.write(sentObject);
            }
        }
        _response.end();
    }
})(P_3_2Server = exports.P_3_2Server || (exports.P_3_2Server = {}));
//# sourceMappingURL=script.js.map