export default class cena2 extends Phaser.Scene {
  constructor () {
    super('cena2')
  }

  preload () {
    /*Carregar imagens*/
    this.load.image('menu-sala', '../assets/imagens/menu-sala.png')
  }

  create () {
    this.game.cenaCorrente = 'cena2'

    this.add.image(400, 225, 'menu-sala')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.socket.emit('cena-publicar', this.game.sala, 'cena3')
        this.game.scene.stop(this.game.cenaCorrente)
        this.game.scene.start('cena3')
      })

    this.add.text(400, 225,
      '\tHá muito tempo atrás, o reino dos Persas seguia em uma rápida expanção ter-\nritorio, subjulgando as cidades dominadas, escravizando pessoas e cobrando\n abusivos impostos.',
      {
        fontFamily: 'PressStart2P',
        fontSize: '10px',
        fill: 'yellow'
      }).setOrigin(0.5, 2.0)

    this.add.text(400, 225,
      '\tAgora mesmo, Xerxes, o rei dos Persas, reúne as suas tropas para atacar, \num contingente de 250 mil homens. Esparta e seus aliados reúnem as pressas \n7 mil soldados, porém outros povos Gregos não haviam juntado seus exércitos.',
      {
        fontFamily: 'PressStart2P',
        fontSize: '10px',
        fill: 'yellow'
      }).setOrigin(0.5, -1.0)
  }
}