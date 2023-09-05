export default class cena0 extends Phaser.Scene {
  constructor () {
    super('cena0')
  }

  preload () {
    /* Imagem de fundo */
    this.load.image('menu-inicial', '../assets/imagens/menu-inicial.png')
  }
    /* Adicionar mapa/player*/
  create () {
    this.add.image(400, 225, 'menu-inicial')
    }
  }