const container = document.querySelector('.container');
const startJogo = document.querySelector('.restart');
const resetJogo = document.querySelector('.btnReset');
let popup = document.querySelector('.gamerOver');
let msgVencedor = document.querySelector('.msgFimDeJogo');
let jogadorAtual = document.querySelector('.jogadorAtual');
let primeiraJogada = document.querySelector('.primeiraJogada');

const jogo_da_velha = {
    tabuleiro: ['', '', '', '', '', '', '', '', ''],
    player: {
        marcadores: ['X', 'O'],
        play: 0,
        reversa: function () {
            this.play = (this.play === 0 ? 1 : 0);     
        }
    },
    fimDeJogo: false,
    sequenciasVencedoras: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ],

    realizarJogada: function (posicao) {
        // verificar se o jogo terminou
        if (this.fimDeJogo) return false;
        if (this.tabuleiro[posicao] === '') {
            this.tabuleiro[posicao] = this.player.marcadores[this.player.play];
            this.exibirTabuleiro();
            let check_sequencia = this.verificadorSequencial(this.player.marcadores[this.player.play]);
            if (check_sequencia >= 0) {
                this.endGame();
            } else {
                this.player.reversa();
            }
            return true;
        } else {
            return false;
        }
    },

    jogadorAtual: function (){
        primeiraJogada.innerText = `Primeira Jogada: ${'X'}`;
        document.addEventListener('click', (e) => {
            if(e.target){   
                primeiraJogada.classList.add('hidden');
            }
            if (this.player.play !== 0) {
                jogadorAtual.classList.remove('hidden');
                jogadorAtual.innerText = `Proximo Jogador: ${'O'}`;
            }else{
                jogadorAtual.innerText = `Proximo Jogador: ${'X'}`;
            }
        });
    },
    
    verificadorSequencial: function (simbolo) {
        for (i in this.sequenciasVencedoras) {
            if (this.tabuleiro[this.sequenciasVencedoras[i][0]] == simbolo &&
                this.tabuleiro[this.sequenciasVencedoras[i][1]] == simbolo &&
                this.tabuleiro[this.sequenciasVencedoras[i][2]] == simbolo) {
                console.log('sequencia vencedora:' + this.tabuleiro[i]);
                msgVencedor.innerText = `Vencedor: ${simbolo}`;
                return i;
            }
        };
        return -1;
    },

    endGame: function () {
        popup.classList.remove('hidden');
    },

    exibirTabuleiro: function () {
        let display = '';
        this.jogadorAtual();

        for (i in this.tabuleiro) {
            display += '<button class="button-display" onclick="jogo_da_velha.realizarJogada(' + i + ')">' + this.tabuleiro[i] + '</button>';
        }
        container.innerHTML = display;
    },

    startJogo: function () {
        jogo_da_velha.tabuleiro.fill('');
        jogo_da_velha.exibirTabuleiro();
    },

    resetJogo: function () {
        popup.classList.add('hidden');
        jogo_da_velha.tabuleiro.fill('');
        jogo_da_velha.exibirTabuleiro();
    }
}

jogo_da_velha.exibirTabuleiro();
startJogo.addEventListener('click', jogo_da_velha.startJogo);
resetJogo.addEventListener('click', jogo_da_velha.resetJogo);