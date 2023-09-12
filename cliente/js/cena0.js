export default class cena0 extends Phaser.Scene {
  constructor () {
    super('cena0')
  }

  preload () {
    /* Carregar imagens*/
    this.load.image('menu-inicial', '../assets/imagens/menu-inicial.png')
    this.load.image('vazio', '../assets/imagens/vazio.png')
    this.load.spritesheet('tela_cheia', '../assets/botão/telacheia.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }
  /* Adicionar menu e botão*/
  create () {
    this.add.image(400, 225, 'menu-inicial')
    this.physics.add.spryte(400, 255, 'vazio')

this.telacheia = this.add
      .sprite(750, 50, 'tela_cheia', 0)
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