const botao = document.querySelector(".btn-login");
const form = document.querySelector("form");
let titulo = document.querySelector('h1');

botao.addEventListener("click", (event) => {
    event.preventDefault();
    form.classList.add("esconder-form")
    titulo.textContent = 'alho refogado';
})