export default class cena0 extends Phaser.Scene {
  constructor () {
    super('cena0')
  }

  preload () {
    /*Carregar imagens*/
    this.load.image('menu-inicial', '../assets/imagens/menu-inicial.png')
    this.load.image('botao-vazio', '../assets/imagens/botao-vazio.png')
    this.load.spritesheet('telacheia', '../assets/imagens/telacheia.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }
  /*Adicionar menu e botão*/
  create () {
    this.add.image(400, 225, 'menu-inicial')
    this.physics.add.image(394, 383, 'botao-vazio')

      .setInteractive()
      .on('pointerover', () => {

      })
      .on('pointerdown', () => {
        this.game.scene.stop('cena0')
        this.game.scene.start('cena1')
      })

  /* Botão de tela cheia */
  this.telacheia = this.add
      .sprite(750,50, 'telacheia', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.scale.isFullscreen) {
          this.telacheia.setFrame(0)
          this.scale.stopFullscreen()
        } else {
          this.telacheia.setFrame(1)
          this.scale.startFullscreen()
        }
      })
    .setScrollFactor(0, 0)
    
  }
}

