export default class cena2 extends Phaser.Scene {
  constructor () {
    super('cena2')
  }

  preload () {
    /*Carregar imagens*/
    this.load.image('menu-sala', '../assets/imagens/menu-sala.png')
  }

  create () {
    this.add.image(400, 225, 'menu-sala')
    this.add.text(400, 225,
      'Há muitos anos atrás, rolou uma\nguerra do balacobaco mt louca slc',
      {
        fontFamily: 'PressStart2P',
        fontSize: '15px',
        fill: 'white'
      }).setOrigin(0.5, 1.0)
  }
}