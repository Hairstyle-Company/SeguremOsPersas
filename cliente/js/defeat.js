export default class defeat extends Phaser.Scene {
  constructor () {
    super('defeat')
  }

  preload () {
    /* Imagem de fundo */
    this.load.image('game-over', '../assets/imagens/game-over.png')
  }

    /* Adicionar mapa/player*/
  create () {

    this.game.scene.getScene('cena0').trilhaCombate.stop()

    this.add.image(400, 225, 'game-over')
      .setScale(0.1, 0.1)
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('defeat')
        this.game.scene.start('cena0')
      })
    }

    /*Final*/
}