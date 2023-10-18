const main = document.querySelector("main");
const root = document.documentElement;

function ativaLetra(elemento) {
  const arrTexto = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  arrTexto.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 75 * i);
  });
}

const titulo = document.querySelector(".digitando");
ativaLetra(titulo);

document.getElementById("tema").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#00fa9a");
    root.style.setProperty("--font-color", "#000000");
    root.style.setProperty("--color-road", "#b9babb");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#121212");
    root.style.setProperty("--primary-color", "#00bfff");
    root.style.setProperty("--font-color", "#fff");
    root.style.setProperty("--color-road", "#222");
    main.dataset.theme = "dark";
  }
});

let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");
btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
});

menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});
