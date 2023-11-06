let nickname = prompt('Qual o seu nickname?');

function saldoVitorias() {
    let vitorias = parseInt(prompt('Qual a sua quantidade de vitórias?'));
    let derrotas = parseInt(prompt('Qual a sua quantidade de derrotas?'));
    return vitorias - derrotas;
}

if (saldoVitorias < 10) {nivel = 'Ferro';}

    else if (saldoVitorias >= 11 && saldoVitorias <= 20) {nivel = 'Bronze';}

    else if (saldoVitorias >= 21 && saldoVitorias <= 50) {nivel = 'Prata';}

    else if (saldoVitorias >= 51 && saldoVitorias <= 80) {nivel = 'Ouro';}

    else if (saldoVitorias >= 81 && saldoVitorias <= 90) {nivel = 'Diamante';}

    else if (saldoVitorias >= 91 && saldoVitorias <= 100) {nivel = 'Lendário';}

    else if (saldoVitorias >= 101) {nivel = 'Imortal';}


var exibirMensagem = function(saldoVitorias, nivel) {
    alert("O Herói tem de saldo de " + saldoVitorias + " e está no nível de " + nivel);
}

exibirMensagem(saldo, nivel);



