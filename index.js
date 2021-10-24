let ordem = [];
let ordemClicado = [];
let pontuacao;

const azul = document.querySelector(".azul");
const verde = document.querySelector(".verde");
const vermelho = document.querySelector(".vermelho");
const amarelo = document.querySelector(".amarelo");


//criar ordem aleatoria de cores
let ordemAleatoria = () => {
    let ordemCores = Math.floor(Math.random() * 4);
    ordem.push(ordemCores);
    ordemClicado = [];

    for (const i in ordem) {
        let corElemento = criarCorElemento(ordem[i])
        acenderCor(corElemento, Number(i) + 1)
    }

}

//acende a proxima cor
let acenderCor = (elemento, numero) => {
    numero = numero * 500;
    setTimeout(() => {
        elemento.classList.add('selected')
    }, numero - 250);

    setTimeout(() => {
        elemento.classList.remove('selected')
    });
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checarOrdem = () => {
    for (const i in ordemClicado) {
        if (ordemClicado[i] != ordem[i]) {
            fimJogo();
            break;
        }
    }
    if (ordemClicado.length == ordem.length) {
        alert(`Pontuação: ${pontuacao}\nVoce acertou! Iniciando proximo nivel`);
        proximoNivel();
    }
}

//funcao para o clique do usuario
let click = (cor) => {
    ordemClicado.push(cor);
    criarCorElemento(cor).classList.add('selected');

    setTimeout(() => {
        criarCorElemento(cor).classList.remove('selected');
        checarOrdem()

    }, 250);

}

//funcao que retorna a cor
let criarCorElemento = (cor) => {
    switch (cor) {
        case 0:
            return verde
        case 1:
            return vermelho
        case 2:
            return amarelo
        case 3:
            return azul
    }
}

//funcao para o proximo nivel do jogo
let proximoNivel = () => {
    pontuacao++;
    ordemAleatoria();
}

//funcao para perder o jogo
let fimJogo = () => {
    alert(`Pontuação: ${pontuacao}\nGame Over!!!!!!\nClique em OK para Continuar`);
    ordem = [];
    ordemClicado = [];

    iniciarJogo();
}


//funcao para iniciar o jogo
let iniciarJogo = () => {
    pontuacao = 0;
    alert(`Bem Vindo ao Genius.\nIniciando Novo Jogo`);

    proximoNivel();
}

//eventos de cliques para as cores
verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);


//inicio do jogo
iniciarJogo()