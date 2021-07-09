
let button: HTMLElement = document.getElementById("submit");
button.onclick = senddata;
function senddata(): void {
    let formData: FormData = new FormData(document.forms[0]);
    console.log("click");

    let _url: RequestInfo = "https://gissigassi.herokuapp.com";
    _url += "/sendData";
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    _url = _url + "?" + query.toString();
    fetch(_url).then(answer => console.log(answer)
    );
}
let time: string = sessionStorage.getItem("time");
let timeDOM: HTMLInputElement = document.getElementById("showtime") as HTMLInputElement;
timeDOM.value = time;