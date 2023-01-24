const container = document.querySelector('.container');
const resetJogo = document.querySelector('.restart');

const jogo_da_velha = {
    tabuleiro: ['', '', '', '', '', '', '', '', ''],
    player: {
        marcadores: ['X', 'O'],
        play: 0,
        reversa: function() {
            this.play =(this.play === 0 ? 1:0);
        }

    },
    verificadorPartida: false,
    
    realizarJogada: function (posicao) {
        // verificar se o jogo terminou
        if (this.verificadorPartida) return false;
        if (this.tabuleiro[posicao] === '') {
            this.tabuleiro[posicao] = this.player.marcadores[this.player.play];
            this.exibirTabuleiro();
            this.player.reversa();
            console.log(this.tabuleiro);
        }


    },

    exibirTabuleiro: function () {
        let display = '';

        for (i in this.tabuleiro) { 
            display += '<button class="button-display" onclick="jogo_da_velha.realizarJogada(' + i + ')">' + this.tabuleiro[i] + '</button>';
        }

        container.innerHTML = display;
    },


    resetJogo: function () {

    }
}

jogo_da_velha.exibirTabuleiro();
resetJogo.addEventListener('click', jogo_da_velha.resetJogo);