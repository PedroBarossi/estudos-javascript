const botao = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];
const darkModeClass = "dark-mode";

botao.addEventListener("click", changeMode);

function changeMode() {
   changeClasses();
   changeTexts();
}

function changeClasses() {
    botao.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeTexts() {
    if (body.classList.contains(darkModeClass)) {
        botao.innerHTML = "Light Mode";
        h1.innerHTML = "Dark Mode ON";
        return;
    }
    botao.innerHTML = "Dark Mode";
    h1.innerHTML = "Light Mode ON"
}