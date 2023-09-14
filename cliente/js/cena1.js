export default class cena1 extends Phaser.Scene {
  constructor () {
    super('cena1')
  }

  preload () {
    this.listaSalaPos = [
      [200, 200],
      [200, 300],
      [200, 400],
      [400, 200],
      [400, 300],
      [400, 400]]
    /*Carregar imagens*/
    this.load.image('salas', '../assets/imagens/salas.png')
    this.load.image('vazio', '../assets/imagens/vazio.png')
  }

  /*Adicionar menu e botão*/
  create () {

    this.add.image(400, 225, 'salas')

    for (let i = 0; i < this.listaSalaPos.length; i++) {
      console.log(this.listaSalaPos)
      this.physics.add.image(this.listaSalaPos[i][0], this.listaSalaPos[i][1], 'vazio')
        .setScale(4, 2)
        
        .setInteractive()
        .on('pointerdown', () => {
          this.game.scene.stop('cena1')
          this.game.scene.start('cena2')
        })

    }
  }
}
