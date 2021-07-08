
let gridcontainer: HTMLElement = document.getElementById("admingrid");
let images: NodeListOf<HTMLImageElement> = gridcontainer.querySelectorAll("img");
let imageurls: string[] = JSON.parse(sessionStorage.getItem("images"));
for (let index: number = 0; index < images.length; index++) {
    const image: HTMLImageElement = images[index] as HTMLImageElement;
    image.setAttribute("onclick", `changeimage(${index})`);
    showimage(index);
}

function changeimage(index: number): void {
    let input: string = prompt("Bitte geben sie die URL des Bildes an");
    if (input != null) {
        imageurls[index] = input;
        sessionStorage.setItem("images", JSON.stringify(imageurls));
        showimage(index);
    }
}

function showimage(index: number): void {
    const image: HTMLImageElement = images[index] as HTMLImageElement;
    image.src = imageurls[index];
}