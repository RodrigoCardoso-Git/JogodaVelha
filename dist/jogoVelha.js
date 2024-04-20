"use strict";
let continua = 'sim';
let jogadores = ['   X   ', '   O   '];
let jogadorAtual = jogadores[0];
let tabuleiro = ['    -    ', '    -    ', '    -    ', '    -    ', '    -    ', '    -    ', '    -    ', '    -    ', '    -    ',];
while (continua.trim().toLowerCase() == 'sim') {
    let verificarQuantidadeJogadas = 0;
    let jogoFinalizado = true;
    // Repeti as jogadas até o jogo ser finalizado.
    while (jogoFinalizado) {
        exibirTabuleiro(tabuleiro);
        fazerJogada(jogadorAtual, tabuleiro);
        verificarQuantidadeJogadas++;
        // Ao final de cada jogada verifica-se a existência de um ganhador ou a ocorrência de uma empate.
        if (verificarVencedor(tabuleiro, jogadorAtual)) {
            alert(jogadorAtual.trim() + ' é o ganhador! Parabéns!');
            exibirTabuleiro(tabuleiro);
            jogoFinalizado = false;
        }
        else if (verificarQuantidadeJogadas == 9) {
            alert('Empate! Deu velha!');
            exibirTabuleiro(tabuleiro);
            jogoFinalizado = false;
        }
        jogadorAtual = alternarJogador(jogadorAtual);
    }
    continua = String(prompt('Digite "sim" para continuar ou digite qualquer tecla para sair. Quer continuar? '));
    // Reinicia as variáveis para que retorne ao seus valores iniciais.
    tabuleiro = ['    -    ', '    -    ', '    -    ', '    -    ', '    -    ', '    -    ', '    -    ', '    -    ', '    -    ',];
    jogadorAtual = jogadores[0];
}
// Apenas para exibir o tabuleiro
function exibirTabuleiro(tabuleiro) {
    alert(tabuleiro[0] + '|' + tabuleiro[1] + '|' + tabuleiro[2] + '\n-----------------------\n' +
        tabuleiro[3] + '|' + tabuleiro[4] + '|' + tabuleiro[5] + '\n-----------------------\n' +
        tabuleiro[6] + '|' + tabuleiro[7] + '|' + tabuleiro[8]);
}
// Responsável por pedi ao jogador a posição e realizar a atribuição de um valor na posição informada.
function fazerJogada(jogadorAtual, tabuleiro) {
    let posicaoEscolhida;
    posicaoEscolhida = Number(prompt('Escolha uma posição(1 até 9)! Jogador Atual: ' + jogadorAtual.trim()));
    // Atribui o valor do jogadorAtual na posição informada.
    if (verificarFazerJogada(posicaoEscolhida, tabuleiro)) {
        // Percorre todo tabuleiro até achar a posição informada.
        for (let i = 0; i < tabuleiro.length; i++) {
            if (posicaoEscolhida == (i + 1)) {
                tabuleiro[i] = jogadorAtual;
            }
        }
    }
    else {
        fazerJogada(jogadorAtual, tabuleiro);
    }
    return tabuleiro;
}
// Alterna o jogador atual. Muda o valor de jogadorAtual.
function alternarJogador(jogadorAtual) {
    if (jogadorAtual.trim() == 'X') {
        jogadorAtual = '   O   ';
    }
    else {
        jogadorAtual = '   X   ';
    }
    return jogadorAtual;
}
// Verefica se existi vencedor: retorna 'true' se existir vencedor.
function verificarVencedor(tabuleiro, jogadorAtual) {
    let houveGanhador = false;
    if (tabuleiro[0] == jogadorAtual && tabuleiro[1] == jogadorAtual && tabuleiro[2] == jogadorAtual) {
        houveGanhador = true;
    }
    if (tabuleiro[3] == jogadorAtual && tabuleiro[4] == jogadorAtual && tabuleiro[5] == jogadorAtual) {
        houveGanhador = true;
    }
    if (tabuleiro[6] == jogadorAtual && tabuleiro[7] == jogadorAtual && tabuleiro[8] == jogadorAtual) {
        houveGanhador = true;
    }
    if (tabuleiro[0] == jogadorAtual && tabuleiro[3] == jogadorAtual && tabuleiro[6] == jogadorAtual) {
        houveGanhador = true;
    }
    if (tabuleiro[1] == jogadorAtual && tabuleiro[4] == jogadorAtual && tabuleiro[7] == jogadorAtual) {
        houveGanhador = true;
    }
    if (tabuleiro[2] == jogadorAtual && tabuleiro[5] == jogadorAtual && tabuleiro[8] == jogadorAtual) {
        houveGanhador = true;
    }
    if (tabuleiro[0] == jogadorAtual && tabuleiro[4] == jogadorAtual && tabuleiro[8] == jogadorAtual) {
        houveGanhador = true;
    }
    if (tabuleiro[2] == jogadorAtual && tabuleiro[4] == jogadorAtual && tabuleiro[6] == jogadorAtual) {
        houveGanhador = true;
    }
    return houveGanhador;
}
// Verifica se o jogador digitou um valor válido ou repetido: retorna 'true' se o valor for válido.
function verificarFazerJogada(posicaoEscolhida, tabuleiro) {
    if (posicaoEscolhida > 9 || posicaoEscolhida == 0 || isNaN(posicaoEscolhida)) {
        alert('Digite apenas números de 1 até 9');
        return false;
    }
    else if (tabuleiro[posicaoEscolhida - 1] != '    -    ') {
        alert('Posição ocupada. Escolha outra.');
        exibirTabuleiro(tabuleiro);
        return false;
    }
    else {
        return true;
    }
}
