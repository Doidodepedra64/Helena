let listaDeNumerosSorteados = [];
let limiteDeTentativas = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto , 'Brazilian Portuguese Female' ,
        {rate:1.2});
    
}

function exibirMensageminicial() {
    exibirTextoNaTela('h1' , 'Jogo do Dale');
    exibirTextoNaTela('p' , 'Escolha um numero entre 1 e 10');
}

exibirMensageminicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1' ,'Acertouuuu');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `o dale é imortal, porém voce usou ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela(`p` , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto)
            exibirTextoNaTela('p' , 'O numero é menor parceiro');
        else {
            if (chute < numeroSecreto) 
                exibirTextoNaTela ('p' , 'O numero é maior bobão');
        }
        tentativas++;
        LimparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 +1);
    let quantidadeDeElementosEscolhidos = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosEscolhidos == 10) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function LimparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    LimparCampo();
    tentativas = 1;
    exibirMensageminicial();
    document.getElementById('reniciar').setAttribute('disabled', true)
}