import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = 
    `
    <iframe 
        width="100%" 
        height="72%" 
        src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture"
        allowfullscreen>
    </iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>
    `

    return video;
}
// cria a lista de vídeos baseado em qual vai usar...pode vir da lista geral ou
// da busca pela palavra no pesquisar
async function listaVideos() {
    // tenta...
    try {
        // criação de vídeos
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    } 
    // se der erro, pega ele e....
    catch {
        // ...faz isso daqui
        lista.innerHTML = `<h2 class="mensagem__titulo"> Não foi possível carregar a lista de vídeos<h2>`
    }
}

listaVideos();