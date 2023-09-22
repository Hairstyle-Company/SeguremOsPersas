import config from './config.js'

export default class cena3 extends Phaser.Scene {
  constructor () {
    super('cena3')
  }

  preload () {
    /* Imagem de fundo */
    this.load.image('mapa', '../assets/imagens/mapa.png')

    /* Imagem do personagem */
    this.load.spritesheet('player1', '../assets/imagens/player1.png', {
      frameWidth: 40,
      frameHeight: 64
    })

    /* Imagem dos botões */
    this.load.image('vazio', '../assets/imagens/vazio.png')
    this.load.image('circulo', '../assets/imagens/circulo.png')
    this.load.plugin('rexvirtualjoystickplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js', true)

  }

  /* Adicionar mapa/player*/
  create () {
    this.add.image(400, 225, 'mapa')
    this.personagem = this.physics.add.sprite(400, 255, 'player1')

    /* Animação parado*/
    this.anims.create({
      key: 'player1-parado',
      frames: this.anims.generateFrameNumbers('player1', {
        start: 0,
        end: 0
      })
    })

    /* Animação andar direita */
    this.anims.create({
      key: 'player1-direita',
      frames: this.anims.generateFrameNumbers('player1', {
        start: 1,
        end: 2
      }),
      frameRate: 7,
      repeat: -1
    })

    /* Animação andar esquerda */
    this.anims.create({
      key: 'player1-esquerda',
      frames: this.anims.generateFrameNumbers('player1', {
        start: 4,
        end: 5
      }),
      frameRate: 7,
      repeat: -1
    })

    /* Animação andar cima */
    this.anims.create({
      key: 'player1-cima',
      frames: this.anims.generateFrameNumbers('player1', {
        start: 1,
        end: 2
      }),
      frameRate: 7,
      repeat: -1
    })

    /* Animação andar baixo */
    this.anims.create({
      key: 'player1-baixo',
      frames: this.anims.generateFrameNumbers('player1', {
        start: 1,
        end: 2
      }),
      frameRate: 7,
      repeat: -1
    })

    this.joystick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
      x: 125,
      y: 325,
      radius: 70,
      base: this.add.circle(0, 0, 100, 0x888888),
      thumb: this.add.circle(0, 0, 50, 0xcccccc),
      // dir: '8dir',
      forceMin: 16,
      // fixed: true,
      // enable: true
    }).on('pointerup', () => {
      this.personagem.setVelocityX(0)
      this.personagem.setVelocityY(0)
    })
  }


  update () {
    if (this.joystick.createCursorKeys().up.isDown) {
      this.personagem.setVelocityY(-100)
    }
    if (this.joystick.createCursorKeys().down.isDown) {
      this.personagem.setVelocityY(100)
    }
    if (this.joystick.createCursorKeys().left.isDown) {
      this.personagem.setVelocityX(-100)
    }
    if (this.joystick.createCursorKeys().right.isDown) {
      this.personagem.setVelocityX(100)
    }
  }

  countdown () { }
}