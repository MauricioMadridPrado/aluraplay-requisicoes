import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");
// cria os videos na tela
async function criarVideo(evento) {
    // previne comportamento de submit
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    // cria um número aleatório entre 1-10
    const descricao = Math.floor(Math.random() * 10).toString();
    // tenta....
    try{
    await conectaApi.criaVideo(titulo, descricao, url, imagem);
    window.location.href = "../pages/envio-concluido.html";
    // se deu problema tu...
    } catch(e){
        // faz isso aqui 
        alert(e);
    }
}


// ao clicar no botão, faz a ação
formulario.addEventListener("submit", evento => criarVideo(evento))