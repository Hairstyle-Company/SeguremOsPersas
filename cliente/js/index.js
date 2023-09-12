import config from './config.js'
import cena0 from './cena0.js'
import cena1 from './cena1.js'
import cena2 from './cena2.js'
import cena3 from './cena3.js'
import win from './win.js'
import defeat from './defeat.js'

class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.scene.add('cena0', cena0)
    this.scene.add('cena1', cena1)
    this.scene.add('cena2', cena2)
    this.scene.add('cena3', cena3)
    this.scene.add('win', win)
    this.scene.add('defeat', defeat)

    this.scene.start('cena0')
  }
}

window.onload = () => {
  window.game = new Game()
}
