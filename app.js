let ListaDeNumerosSorteados = [];
let LimiteDeNumero = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirMensagemInicial () {
    exibirTextoNaTela('h1', 'Sejam bem vindo ao Jogo da Adivinhação');
    exibirTextoNaTela('p', 'Escolha um número de entre 1 a 10');
}

function verificarChute() {
    let chute = document.querySelector("input"). value;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'MUITO BEM, VOCÊ DESCOBRIU');
        let PalavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número com ${tentativas} ${PalavraTentativa}!`;
        exibirTextoNaTela ('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p' , 'O número secreto é menor'); 
     } else {
        exibirTextoNaTela ('p' , 'O número secreto é maior'); }
        tentativas++;
        LimparCampo();
     }
    }
    function LimparCampo() 
    {chute = document.querySelector('input');
     chute.value = '';                        
    }
     
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

    exibirMensagemInicial();


    function gerarNumeroAleatorio() {
        let numeroEscolhido = parseInt(Math.random() * LimiteDeNumero + 1);
        let quantidadeDeElementosNaLista = ListaDeNumerosSorteados.length;
    
        if (quantidadeDeElementosNaLista == LimiteDeNumero) {
            ListaDeNumerosSorteados = [];
        }
        if (listaDeNumerosSorteados.includes(numeroEscolhido) ) {
            return gerarNumeroAleatorio();
        } else {
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados)
            return numeroEscolhido;
        }
    }

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    LimparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled' , true)
}