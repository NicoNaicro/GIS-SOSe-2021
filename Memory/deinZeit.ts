
let button: HTMLElement = document.getElementById("submit");

button.onclick = 
async function senddata(): Promise<void> {
    let formData: FormData =  new FormData(document.forms[0]);

    let _url: RequestInfo = "https://gissigassi.herokuapp.com";
    _url += "/sendData";
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    _url = _url + "?" + query.toString(); 
    let answer: Response = await fetch(_url);
    console.log(answer);  
};
let time: string = sessionStorage.getItem("time");
let timeDOM: HTMLInputElement = document.getElementById("showtime") as HTMLInputElement;
timeDOM.value = time;