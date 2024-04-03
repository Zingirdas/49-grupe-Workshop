const hex = document.querySelector(".hexCode")
const btn = document.querySelector(".generate")
const body = document.querySelector("body")

const randomColor = Math.random().toString(16)
console.log(randomColor);

const generateHexColor = () => {
    // Math.random() - generuoja skaicius nuo 1 iki 0
    // .toString() - leidzia rasti sesiolikini skaiciu
    const randomColor = Math.random().toString(16).substring(2, 8);

    body.style.backgroundColor = "#" + randomColor;
    hex.innerHTML = "#" + randomColor
}

btn.addEventListener("click", generateHexColor)
body.addEventListener("mousewheel", generateHexColor)