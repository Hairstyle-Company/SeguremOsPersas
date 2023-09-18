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

      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena2')
        this.game.scene.start('cena3')
      })

    this.add.text(400, 225,
      '\tHá muitos anos atrás, o reino dos Persas seguia em uma rápida expanção \n territorial, subjulgando as cidades dominadas, escravizando pessoas e \ncobrando abusivos impostos.',
      {
        fontFamily: 'PressStart2P',
        fontSize: '10px',
        fill: 'yellow'
      }).setOrigin(0.5, 2.0)

    this.add.text(400, 225,
      '\t Agora mesmo, Xerxes, o rei dos Persas, reúne as suas tropas para atacar, \n um contingente de 250 mil homens. Esparta e seus aliados reúnem as pressas \n 7 mil soldados, porém outros povos Gregos ainda precisavam de mais tempo \n para juntar seus exércitos...eles precisavam comprar tempo para isso.',
      {
        fontFamily: 'PressStart2P',
        fontSize: '10px',
        fill: 'yellow'
      }).setOrigin(0.5, -1.0)
  }
}