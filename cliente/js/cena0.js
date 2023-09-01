export default class cena0 extends Phaser.Scene {
  constructor () {
    super('cena0')
  }

  preload () {
    /* Imagem de fundo */
    this.load.image('ifsc-sj-2014', '../assets/imagens/ifsc-sj-2014.png')

    /* Imagem do personagem */
    this.load.spritesheet('player1', '../assets/imagens/player1.png', {
      frameWidth: 40,
      frameHeight: 64
    })

    /* Imagem dos botões */
    this.load.image('vazio', '../assets/imagens/vazio.png')
    this.load.image('circulo', '../assets/imagens/circulo.png')

  }

  create () {
    this.add.image(400, 225, 'ifsc-sj-2014')

    this.personagem = this.physics.add.sprite(400, 255, 'player1')
      .setInteractive()
      .on('pointerdown', () => {
        this.personagem.anims.play('player1-direita')
        this.personagem.setVelocityX(100)
      })

    /* Animação parado*/
    this.anims.create({
      key: 'player1-parado',
      frames: this.anims.generateFrameNumbers('player1', {
        start: 0,
        end: 3
      }),
      frameRate: 15,
      repeat: -1
    })

    /* Animação andar direita */
    this.anims.create({
      key: 'player1-direita',
      frames: this.anims.generateFrameNumbers('player1', {
        start: 0,
        end: 3
      }),
      frameRate: 15,
      repeat: -1
    })

    /* Animação andar esquerda */
    this.anims.create({
      key: 'player1-esquerda',
      frames: this.anims.generateFrameNumbers('player1', {
        start: 0,
        end: 3
      }),
      frameRate: 15,
      repeat: -1
    })

    /* Animação andar cima */
    this.anims.create({
      key: 'player1-cima',
      frames: this.anims.generateFrameNumbers('player1', {
        start: 0,
        end: 3
      }),
      frameRate: 15,
      repeat: -1
    })

    /* Animação andar baixo */
    this.anims.create({
      key: 'player1-baixo',
      frames: this.anims.generateFrameNumbers('player1', {
        start: 0,
        end: 3
      }),
      frameRate: 15,
      repeat: -1
    })

    /*Joystick*/
    this.add.image(125, 325, 'circulo')

    /* Programação do botão direito */
    this.direita = this.physics.add.sprite(200, 325, 'vazio')
      .setInteractive()
      .on('pointerdown', () => {
        this.direita.setFrame(1)
        this.personagem.anims.play('player1-direita', true)
        this.personagem.setVelocityX(100)
      })
      .on('pointerup', () => {
        this.direita.setFrame(0)
        this.personagem.anims.play('player1-parado')
        this.personagem.setVelocityX(0)
      })

    /* Programação do botão esquerdo */
    this.esquerda = this.physics.add.sprite(50, 325, 'vazio')
      .setInteractive()
      .on('pointerdown', () => {
        this.esquerda.setFrame(1)
        this.personagem.anims.play('player1-esquerda', true)
        this.personagem.setVelocityX(-100)
      })
      .on('pointerup', () => {
        this.esquerda.setFrame(0)
        this.personagem.anims.play('player1-parado')
        this.personagem.setVelocityX(0)
      })

    /* Programação do botão cima */
    this.cima = this.physics.add.sprite(125, 250, 'vazio')
      .setInteractive()
      .on('pointerdown', () => {
        this.cima.setFrame(1)
        this.personagem.anims.play('player1-cima', true)
        this.personagem.setVelocityY(-100)
      })
      .on('pointerup', () => {
        this.cima.setFrame(0)
        this.personagem.anims.play('player1-parado')
        this.personagem.setVelocityY(0)
      })

    /* Programação do botão baixo */
    this.baixo = this.physics.add.sprite(125, 400, 'vazio')
      .setInteractive()
      .on('pointerdown', () => {
        this.baixo.setFrame(1)
        this.personagem.anims.play('player1-baixo', true)
        this.personagem.setVelocityY(100)
      })
      .on('pointerup', () => {
        this.baixo.setFrame(0)
        this.personagem.anims.play('player1-parado')
        this.personagem.setVelocityY(0)
      })

    /* Programação do botão Diagonal baixo-esquerda */
    this.baixo = this.physics.add.sprite(75, 375, 'vazio')
      .setInteractive()
      .on('pointerdown', () => {
        this.baixo.setFrame(1)
        this.personagem.anims.play('player1-baixo', true)
        this.personagem.setVelocityY(100)
        this.personagem.setVelocityX(-100)
      })
      .on('pointerup', () => {
        this.baixo.setFrame(0)
        this.personagem.anims.play('player1-parado')
        this.personagem.setVelocityY(0)
        this.personagem.setVelocityX(0)
      })

    /* Programação do botão Diagonal baixo-direita */
    this.baixo = this.physics.add.sprite(175, 375, 'vazio')
      .setInteractive()
      .on('pointerdown', () => {
        this.baixo.setFrame(1)
        this.personagem.anims.play('player1-baixo', true)
        this.personagem.setVelocityY(100)
        this.personagem.setVelocityX(100)
      })
      .on('pointerup', () => {
        this.baixo.setFrame(0)
        this.personagem.anims.play('player1-parado')
        this.personagem.setVelocityY(0)
        this.personagem.setVelocityX(0)
      })

    /* Programação do botão diagonal cima-esquerda */
    this.cima = this.physics.add.sprite(75, 275, 'vazio')
      .setInteractive()
      .on('pointerdown', () => {
        this.cima.setFrame(1)
        this.personagem.anims.play('player1-cima', true)
        this.personagem.setVelocityY(-100)
        this.personagem.setVelocityX(-100)
      })
      .on('pointerup', () => {
        this.cima.setFrame(0)
        this.personagem.anims.play('player1-parado')
        this.personagem.setVelocityY(0)
        this.personagem.setVelocityX(0)
      })

    /* Programação do botão diagonal cima-direita */
    this.cima = this.physics.add.sprite(175, 275, 'vazio')
      .setInteractive()
      .on('pointerdown', () => {
        this.cima.setFrame(1)
        this.personagem.anims.play('player1-cima', true)
        this.personagem.setVelocityY(-100)
        this.personagem.setVelocityX(100)
      })
      .on('pointerup', () => {
        this.cima.setFrame(0)
        this.personagem.anims.play('player1-parado')
        this.personagem.setVelocityY(0)
        this.personagem.setVelocityX(0)
      })
  }

  countdown () { }
}