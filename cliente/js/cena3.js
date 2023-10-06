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

    /* Imagem do inimigo */
    this.load.spritesheet('persa-comum1', '../assets/imagens/persa-comum1.png', {
      frameWidth: 40,
      frameHeight: 56
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
    this.personagem.setCollideWorldBounds(true);
    this.physics.add.collider(this.personagem, this.persaComum1, this.defeat, null, this)

    /* Adicionar inimigo */
    this.persaComum1 = this.physics.add.sprite(200, 155, 'persa-comum1')

    /* Adicionar físicas :,(*/


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

    if (this.game.jogadores.primeiro === this.game.socket.id) {
    this.personagem = this.physics.add.sprite(400, 255, 'player1')    
    } else if (this.game.jogadores.segundo === this.game.socket.id) {
    this.personagem = this.physics.add.sprite(400, 255, 'player1')
    } else

    // Configuração do joystick para 8 direções
    this.joystick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
      x: 125,
      y: 325,
      radius: 70,
      base: this.add.circle(0, 0, 100, 0x888888),
      thumb: this.add.circle(0, 0, 50, 0xcccccc),
      dir: '8dir', // Configuração para 8 direções
      forceMin: 16
    }).on('pointerup', () => {
      this.personagem.setVelocity(0, 0); // Pare o personagem quando o joystick é solto
    });
  }

  update () {
    const cursorKeys = this.joystick.createCursorKeys();

    // Defina a velocidade do personagem com base nas teclas pressionadas
    const speed = 100; // Velocidade do personagem
    let velocityX = 0;
    let velocityY = 0;

    if (cursorKeys.up.isDown) {
      velocityY = -speed;
    } else if (cursorKeys.down.isDown) {
      velocityY = speed;
    }

    if (cursorKeys.left.isDown) {
      velocityX = -speed;
    } else if (cursorKeys.right.isDown) {
      velocityX = speed;
    }

    // Normalize a velocidade nas diagonais para evitar movimento mais rápido
    if (velocityX !== 0 && velocityY !== 0) {
      velocityX *= Math.sqrt(0.5);
      velocityY *= Math.sqrt(0.5);
    }

    this.personagem.setVelocity(velocityX, velocityY);
  }

  defeat () {
    this.game.scene.stop('cena3');
    this.game.scene.start('defeat');
  }
}