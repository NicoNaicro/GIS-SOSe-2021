import * as Http from "http";
import * as Url from "url";

export namespace P_3_2Server {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);    //neue Variable um sich mit Server zu verbinden
    if (!port)
        port = 8100;                                //dem Port 8100 zuweisen

    let server: Http.Server = Http.createServer();  //den Server erstellen
    server.addListener("request", handleRequest);   //Eventlistener hinzufügen
    server.addListener("listening", handleListen); 
    server.listen(port);

    function handleListen(): void {          //Funktion mit Feedback "Listening"       
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {  //Funktion um Zugriff zu gewähren und gibt URL zurück
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: string = <string>url.pathname;
            if (path == "/html") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                for (let key in url.query) {
                    _response.write("<p>" + key + ":" + url.query[key] + "</p>");
                }
            }
            else if (path == "/json") {
                _response.setHeader("content-type", "application/json");
                let sentObject: string = JSON.stringify(url.query);
                console.log(sentObject);
                _response.write(sentObject);

            }
        }
        _response.end();
    }


}