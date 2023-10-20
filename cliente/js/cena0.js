export default class cena0 extends Phaser.Scene {
  constructor () {
    super('cena0')
  }

  preload () {
    /*Carregar imagens*/
    this.load.image('menu-inicial', '../assets/imagens/menu-inicial.png')
    this.load.image('vazio', '../assets/imagens/vazio.png')
    this.load.spritesheet('telacheia', '../assets/imagens/telacheia.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.audio('musica-abertura', '../assets/musicas/musica-abertura.mp3')


  }
  /*Adicionar menu e botão*/
  create () {

    

    const fadeIn = (target, duration, onComplete) => {
      this.tweens.add({
        targets: target,
        alpha: 1,
        duration: duration,
        onComplete: onComplete,
      })
    }

    const mainImg = this.add.image(400, 225, 'menu-inicial').setAlpha(0)

    this.physics.add.image(394, 383, 'vazio')
      .setScale(2, 1)

      .setInteractive()
      .on('pointerover', () => {

      })
      .on('pointerdown', () => {
        this.game.scene.stop('cena0')
        this.game.scene.start('sala')
      })

    /* Botão de tela cheia */
    const fullscreenImg = this.telacheia = this.add
      .sprite(750, 50, 'telacheia', 0)
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
      .setAlpha(0)

    fadeIn(mainImg, 2000)
    fadeIn(fullscreenImg, 2000)
  }
}

