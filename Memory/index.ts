if (!("images" in sessionStorage)) {
    let imagepath: string[] = ["Bilder/bunt.png", "Bilder/fire ice cross.jpg", "Bilder/neon sports cross.png", "Bilder/sneaker cross.jpg", "Bilder/Sneaker Label.jpg", "Bilder/Sneaker s cross.png", "Bilder/sunset cross.png", "Bilder/xmas.jpg"];
    sessionStorage.setItem("images", JSON.stringify(imagepath));
}