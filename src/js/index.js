/*
    OBJETIVO - quando clicar no botão temos que mostrar a imagem de fundo correspondente

    - PASSO 1 - dar um jeito de pegar o elemento HTML dos botoes

    - PASSO 2 - dar um jeito de pegar o  clique do usuário no botão

    - PASSO 3 - desmarcar o botão selecionado anterior

    - passo 4 - marcar o botçao como se estivesse selecionado

    - PASSO 5 - esconder a imagem de fundo anterior

    - PASSO 6 - fazer aparecer a imagem de fundo correspondente ao botão clicando
*/

// PASSO 1 - dar um jeito de pegar o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// PASSO 2 - dar um jeito de pegar o  clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        desmarcarBotaoSelecionado();

        marcarBotaoSelecionado(botao);

        esconderImagemAtivaDeFundo();

        mostrarImagemDeFundoClicando(indice);
    })
})

function mostrarImagemDeFundoClicando(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtivaDeFundo() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
