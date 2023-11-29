export default class gameover extends Phaser.Scene {
  constructor () {
    super('gameover')
  }

  preload () {
    /* Imagem de fundo */
    this.load.image('game-over', '../assets/imagens/game-over.png')
  }

    /* Adicionar mapa/player*/
  create () {

    this.add.image(400, 225, 'game-over')
      .setScale(0.1, 0.1)
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('gameover')
        this.game.scene.start('cena0')
      })
    }

    /*Final*/
}