import * as Http from "http";

export namespace P_3_1Server {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);    //neue Variable um sich mit Server zu verbinden
    if (!port)
        port = 8100;                                //dem Port 8100 zuweisen

    let server: Http.Server = Http.createServer();  //den Server erstellen
    server.addListener("request", handleRequest);   //Eventlistener hinzufügen
    server.addListener("listening", handleListen);  
    server.listen(port);

    function handleListen(): void {                 //Funktion mit Feedback "Listening"
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {      //Funktion um Zugriff zu gewähren und gibt URL zurück
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
    }
}