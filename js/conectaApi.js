// faz a conexão
async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}
// cria o vídeo no json--- A ordem interfere aqui
async function criaVideo(titulo, descricao, url, imagem) {
    // conexão no db
    const conexao = await fetch("http://localhost:3000/videos", {
        // metodo para adicionar na lista
        method: "POST",
        // indica o tipo de lista
        headers: {
            "Content-type": "application/json"
        },
        // define o corpo do item na lista...
        // a ordem interfere!
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    // Se a conexão não estiver bem tu vai...
    if(!conexao.ok){
        // jogar isso aqui na tela
        throw new Error("Não foi poissível enviar o vídeo")
    }
    // converte a os dados em um json
    const conexaoConvertida = conexao.json();
    // devolve ela
    return conexaoConvertida;
}
// faz a busca pelos videos baseado no termo da pesquisa
async function buscaVideos(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida
}
// exportando as funções
export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideos
}