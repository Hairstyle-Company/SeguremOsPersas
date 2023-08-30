export default class cena0 extends Phaser.Scene {
  constructor () {
    super('cena0')
  }

  preload () {
    /* Imagem de fundo */
    this.load.image('ifsc-sj-2014', '../assets/imagens/ifsc-sj-2014.png')

    /* Imagem do personagem */
    this.load.spritesheet('xerxes', '../assets/imagens/xerxes.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    /* Imagem dos botões */
    this.load.spritesheet('direita', '../assets/imagens/direita.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('esquerda', '../assets/imagens/esquerda.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('baixo', '../assets/imagens/baixo.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('cima', '../assets/imagens/cima.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

    create() {
      this.add.image(400, 225, 'ifsc-sj-2014')

      this.personagem = this.physics.add.sprite(400, 255, 'xerxes')
        .setInteractive()
        .on('pointerdown', () => {
          this.personagem.anims.play('xerxes-direita')
          this.personagem.setVelocityX(100)
        })
      
      /* Animação parado*/
      this.anims.create({
        key: 'xerxes-parado',
        frames: this.anims.generateFrameNumbers('xerxes', {
          start: 5,
          end: 6
        }),
        frameRate: 1
      })

      /* Animação andar direita */
      this.anims.create({
        key: 'xerxes-direita',
        frames: this.anims.generateFrameNumbers('xerxes', {
          start: 8,
          end: 11
        }),
        frameRate: 6,
        repeat: -1
      })

      /* Animação andar esquerda */
      this.anims.create({
        key: 'xerxes-esquerda',
        frames: this.anims.generateFrameNumbers('xerxes', {
          start: 4,
          end: 7
        }),
        frameRate: 6,
        repeat: -1
      })

      /* Animação andar cima */
      this.anims.create({
        key: 'xerxes-cima',
        frames: this.anims.generateFrameNumbers('xerxes', {
          start: 12,
          end: 15
        }),
        frameRate: 6,
        repeat: -1
      })

      /* Animação andar baixo */
      this.anims.create({
        key: 'xerxes-baixo',
        frames: this.anims.generateFrameNumbers('xerxes', {
          start: 0,
          end: 3
        }),
        frameRate: 6,
        repeat: -1
      })

      /* Programação do botão direito */
      this.direita = this.add.sprite(250, 400, 'direita')
        .setInteractive()
        .on('pointerdown', () => {
          this.direita.setFrame(1)
          this.personagem.anims.play('xerxes-direita', true)
          this.personagem.setVelocityX(100)
        })
        .on('pointerup', () => {
          this.direita.setFrame(0)
          this.personagem.anims.play('xerxes-parado')
          this.personagem.setVelocityX(0)
        })
      
      /* Programação do botão esquerdo */
      this.esquerda = this.add.sprite(100, 400, 'esquerda')
        .setInteractive()
        .on('pointerdown', () => {
          this.esquerda.setFrame(1)
          this.personagem.anims.play('xerxes-esquerda', true)
          this.personagem.setVelocityX(-100)
        })
        .on('pointerup', () => {
          this.esquerda.setFrame(0)
          this.personagem.anims.play('xerxes-parado')
          this.personagem.setVelocityX(0)
        })
      
      /* Programação do botão cima */
      this.cima = this.add.sprite(175, 325, 'cima')
        .setInteractive()
        .on('pointerdown', () => {
          this.cima.setFrame(1)
          this.personagem.anims.play('xerxes-cima', true)
          this.personagem.setVelocityY(-100)
        })
        .on('pointerup', () => {
          this.cima.setFrame(0)
          this.personagem.anims.play('xerxes-parado')
          this.personagem.setVelocityY(0)
        })

      /* Programação do botão baixo */
      this.baixo = this.add.sprite(175, 400, 'baixo')
        .setInteractive()
        .on('pointerdown', () => {
          this.baixo.setFrame(1)
          this.personagem.anims.play('xerxes-baixo', true)
          this.personagem.setVelocityY(100)
        })
        .on('pointerup', () => {
          this.baixo.setFrame(0)
          this.personagem.anims.play('xerxes-parado')
          this.personagem.setVelocityY(0)
        })

    }

    countdown() { }
  }