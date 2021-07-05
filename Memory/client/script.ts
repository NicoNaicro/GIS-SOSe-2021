namespace Memory {
    let displayResponse: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("answer");
    async function senddata(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
    
        let _url: RequestInfo = "https://gissigassi.herokuapp.com";
        _url += "/sendData";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString(); 
        let answer: Response = await fetch(_url);
        console.log(answer);  
    }
    async function getdata(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
     
        let _url: RequestInfo = "https://gissigassi.herokuapp.com";
        _url += "/getData";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let answer: Response = await fetch(_url);
        let output: string = await answer.text();
        displayResponse.innerHTML = output;
        


    }

    document.getElementById("sendbutton").addEventListener("click", senddata);
    document.getElementById("getbutton").addEventListener("click", getdata);
}