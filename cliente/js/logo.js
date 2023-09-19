export default class defeat extends Phaser.Scene {
  constructor () {
    super('logo')
  }

  preload () {
    /*Carregar imagens*/
    this.load.image('logo-empresa', '../assets/imagens/logo-empresa.png')
  }

  create () {
    const fadeIn = (target, duration, onComplete) => {
      this.tweens.add({
        targets: target,
        alpha: 1,
        duration: duration,
        onComplete: onComplete,
      })
    }

    const fadeOut = (target, duration, onComplete) => {
      this.tweens.add({
        targets: target,
        alpha: 0,
        duration: duration,
        onComplete: onComplete,
      })
    }

      const logo = this.add.image(400, 225, 'logo-empresa').setAlpha(0)

      fadeIn(logo, 1500)
      this.time.delayedCall(3000, () => {
        fadeOut(logo, 1500, () => { 
          this.scene.start('cena0')
        })
      })
    }
  }