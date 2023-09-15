export default class cena1 extends Phaser.Scene {
  constructor () {
    super('cena1')
  }

  preload () {
    this.listaSalaPos = [
      [200, 85],
      [200, 225],
      [200, 365],
      [585, 85],
      [585, 225],
      [585, 365]]
    /*Carregar imagens*/
    this.load.image('salas', '../assets/imagens/salas.png')
    this.load.image('vazio', '../assets/imagens/vazio.png')
    this.load.script(
      'webfont',
      'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
    )
  }

  /*Adicionar menu e botão*/
  create () {

    WebFont.load({
      custom: {
        families: ['PressStart2P'],
        urls: ['../main.css']
      }
    })

    this.add.image(400, 225, 'salas')

    for (let i = 0; i < this.listaSalaPos.length; i++) {
      console.log(this.listaSalaPos)
      this.physics.add.image(this.listaSalaPos[i][0], this.listaSalaPos[i][1], 'vazio')
        .setScale(6.5, 2.5)
        
        .setInteractive()
        .on('pointerdown', () => {
          this.game.scene.stop('cena1')
          this.game.scene.start('cena2')
        })

    }
  }
}
