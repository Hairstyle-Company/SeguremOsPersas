export default class cena2 extends Phaser.Scene {
  constructor () {
    super('cena2')
  }

  preload () {
    /*Carregar imagens*/
    this.load.image('menu-sala', '../assets/imagens/menu-sala.png')
  }

    create() {
      this.add.image(400, 225, 'menu-sala')
    }
  }