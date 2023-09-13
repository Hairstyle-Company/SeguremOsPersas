export default class cena1 extends Phaser.Scene {
  constructor () {
    super('cena1')
  }

  preload () {
    /*Carregar imagens*/
    this.load.image('menu-sala', '../assets/imagens/menu-sala.png')
    this.load.image('salas', '../assets/imagens/salas.png')
  }

  /*Adicionar menu e botão*/
  create () {
    this.add.image(400, 225, 'menu-sala')
    this.add.image(400, 225, 'salas')

  }
}