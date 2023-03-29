import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

// função que faz a pesquisa dos itens
async function buscarVideos(evento){
    evento.preventDefault();
// estados
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideos(dadosDePesquisa);
    const lista = document.querySelector("[data-lista]")
// limpa a lista antes de fazer a pesquisa
    while(lista.firstChild) {
        lista.removeChild (lista.firstChild)
    }
// aplica a pesquisa na lista
    busca.forEach((elemento)=> 
            lista.appendChild(constroiCard(
                elemento.titulo, 
                elemento.descricao, 
                elemento.url, 
                elemento.imagem
                )
            )
        )
        // validando com tamanho da lista
        // Se ela for zero, sem itens..
        if(busca.length == 0){
            // faz isso aqui 
            lista.innerHTML = `<h2 class="mensagem__titulo"> Não encontramos vídeos com esse termo :/ </h2>`
        }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")

botaoDePesquisa.addEventListener("click", evento => buscarVideos(evento))