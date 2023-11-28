export default class sala extends Phaser.Scene {
  constructor () {
    super('sala')
  }

  preload () {
  }

  create () {

    this.mensagem = this.add.text(100, 50, 'Escolha uma sala para entrar:', {
      fontFamily: 'monospace',
      font: '32px Courier',
      fill: '#cccccc'
    })

    this.salas = [
      {
        numero: 1,
        x: 65,
        y: 175
      },
      {
        numero: 2,
        x: 250,
        y: 175
      },
      {
        numero: 3,
        x: 435,
        y: 175
      },
      {
        numero: 4,
        x: 620,
        y: 175
      },
      {
        numero: 5,
        x: 65,
        y: 300
      },
      {
        numero: 6,
        x: 250,
        y: 300
      },
      {
        numero: 7,
        x: 435,
        y: 300
      },
      {
        numero: 8,
        x: 620,
        y: 300
      },

      
    ]

    this.salas.forEach((sala) => {
      sala.botao = this.add.text(sala.x, sala.y, 'Sala ' + sala.numero, {
        fontFamily: 'monospace',
        font: '32px Courier',
        fill: '#cccccc'
      })
        .setInteractive()
        .on('pointerdown', () => {
          this.salas.forEach((item) => {
            item.botao.destroy()
          })

          this.game.sala = sala.numero
          this.game.socket.emit('entrar-na-sala', this.game.sala)
        })

      this.game.socket.on('jogadores', (jogadores) => {
        console.log(jogadores)
        if (jogadores.segundo) {
          this.mensagem.setText('Conectando...')
          this.game.jogadores = jogadores
          this.game.scene.stop('sala')
          this.game.scene.start('cena3')
        } else if (jogadores.primeiro) {
          this.mensagem.setText('Aguardando segundo jogador...')
          navigator.mediaDevices
            .getUserMedia({ video: false, audio: true })
            .then((stream) => {
              this.game.midias = stream
            })
            .catch((error) => console.error(error))
        }
      })
    })
  }


  update () { }
}
