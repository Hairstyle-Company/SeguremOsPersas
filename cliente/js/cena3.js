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
    this.load.spritesheet('player2', '../assets/imagens/player2.png', {
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
    this.load.audio('trilha-combate', '../assets/musicas/musica-combate.mp3')
  }

  /* Adicionar mapa/player */
  create () {
    this.vida = 1

    this.game.trilhaCombate = this.sound.add('trilha-combate')
    this.game.trilhaCombate.loop = true
    this.game.trilhaCombate.play()
    this.game.scene.getScene('cena0').trilhaMenu.stop()

    this.add.image(400, 225, 'mapa')

    /* Adicionar inimigo */
    this.persaComum1 = this.physics.add.sprite(75, 55, 'persa-comum1')

    /* Animação parado*/
    /* this.anims.create({
      key: 'personagem-parado',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 0
      })
    })

    /* Animação andar direita */
    /*  this.anims.create({
       key: 'personagem-direita',
       frames: this.anims.generateFrameNumbers(this.local, {
         start: 1,
         end: 2
       }),
       frameRate: 7,
       repeat: -1
     })
 
     /* Animação andar esquerda */
    /* this.anims.create({
      key: 'personagem-esquerda',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 4,
        end: 5
      }),
      frameRate: 7,
      repeat: -1
    })

    /* Animação andar cima */
    /* this.anims.create({
      key: 'personagem-cima',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 1,
        end: 2
      }),
      frameRate: 7,
      repeat: -1
    })

    /* Animação andar baixo */
    /* this.anims.create({
      key: 'personagem-baixo',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 1,
        end: 2
      }),
      frameRate: 7,
      repeat: -1
    })*/

    /* multiplayer */
    if (this.game.jogadores.primeiro === this.game.socket.id) {
      this.local = 'player1'
      this.remote = 'player2'
      this.personagem = this.physics.add.sprite(400, 255, this.local)
      this.personagemRemoto = this.add.sprite(400, 255, this.remote)
    } else if (this.game.jogadores.segundo === this.game.socket.id) {
      this.local = 'player2'
      this.remote = 'player1'
      this.personagem = this.physics.add.sprite(300, 255, this.local)
      this.personagemRemoto = this.add.sprite(400, 255, this.remote)

      /* Chat de voz */
      navigator.mediaDevices.getUserMedia({ video: false, audio: true })
        .then((stream) => {
          this.game.localConnection = new RTCPeerConnection(this.game.ice_servers)

          this.game.localConnection.onicecandidate = ({ candidate }) =>
            candidate && this.game.socket.emit('candidate', this.game.sala, candidate)

          this.game.localConnection.ontrack = ({ streams: [stream] }) =>
            this.game.audio.srcObject = stream

          stream.getTracks()
            .forEach((track) => this.game.localConnection.addTrack(track, stream))

          this.game.localConnection.createOffer()
            .then((offer) => this.game.localConnection.setLocalDescription(offer))
            .then(() => this.game.socket.emit('offer', this.game.sala, this.game.localConnection.localDescription))

          this.game.midias = stream
        })
        .catch((error) => console.error(error))
    }

    this.game.socket.on('offer', (description) => {
      this.game.remoteConnection = new RTCPeerConnection(this.game.ice_servers)

      this.game.remoteConnection.onicecandidate = ({ candidate }) =>
        candidate && this.game.socket.emit('candidate', this.game.sala, candidate)

      this.game.remoteConnection.ontrack = ({ streams: [midia] }) =>
        this.game.audio.srcObject = midia

      this.game.midias.getTracks()
        .forEach((track) => this.game.remoteConnection.addTrack(track, this.game.midias))

      this.game.remoteConnection.setRemoteDescription(description)
        .then(() => this.game.remoteConnection.createAnswer())
        .then((answer) => this.game.remoteConnection.setLocalDescription(answer))
        .then(() => this.game.socket.emit('answer', this.game.sala, this.game.remoteConnection.localDescription))
    })

    this.game.socket.on('answer', (description) =>
      this.game.localConnection.setRemoteDescription(description)
    )

    this.game.socket.on('candidate', (candidate) => {
      const conn = this.game.localConnection || this.game.remoteConnection
      conn.addIceCandidate(new RTCIceCandidate(candidate))
    })

    // Colisão com o mundo
    this.personagem.setCollideWorldBounds(true);


    // Configuração do joystick para 8 direções
    this.joystick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
      x: 125,
      y: 325,
      radius: 60,
      base: this.add.circle(0, 0, 70, 0x888888),
      thumb: this.add.circle(0, 0, 35, 0xcccccc),
      dir: '8dir', // Configuração para 8 direções
      forceMin: 16
    }).on('pointerup', () => {
      this.personagem.setVelocity(0, 0); // Pare o personagem quando o joystick é solto
    });

    this.game.socket.on('estado-notificar', ({ cena, x, y, frame }) => {
      this.personagemRemoto.x = x
      this.personagemRemoto.y = y
      this.personagemRemoto.setFrame(frame)
    })

    this.physics.add.collider(this.personagem, this.persaComum1, this.morte, null, this)
  }

  update () {
    const cursorKeys = this.joystick.createCursorKeys();

    // Defina a velocidade do personagem com base nas teclas pressionadas
    const speed = 100; // Velocidade do personagem
    let velocityX = 0;
    let velocityY = 0;

    try {
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
      this.game.socket.emit('estado-publicar', this.game.sala, {
        cena: 'cena3',
        x: this.personagem.x,
        y: this.personagem.y,
        frame: this.personagem.frame.name
      })
    }
    catch (error) {
      console.error(error)
    }

    //Persa persegue players
    try {
      this.game.socket.emit('estado-publicar', this.game.sala, {
        x: this.personagem.x,
        y: this.personagem.y,
        frame: this.personagem.frame.name
      })
      if (this.vida > 0) {
        /* persa segue personagem mais próximo */
        const hipotenusaPersonagem = Phaser.Math.Distance.Between(
          this.personagem.x,
          this.persaComum1.x,
          this.personagem.y,
          this.persaComum1.y
        )

        const hipotenusaPersonagemRemoto = Phaser.Math.Distance.Between(
          this.personagemRemoto.x,
          this.persaComum1.x,
          this.personagemRemoto.y,
          this.persaComum1.y
        )

        /* Por padrão, o primeiro jogador é o alvo */
        let alvo = this.personagem
        if (hipotenusaPersonagem > hipotenusaPersonagemRemoto) {
          /* Jogador 2 é perseguido pelo persa */
          alvo = this.personagemRemoto
        }

        /* Sentido no eixo X */
        const diffX = alvo.x - this.persaComum1.x
        if (diffX >= 10) {
          this.persaComum1.setVelocityX(25)
        } else if (diffX <= 10) {
          this.persaComum1.setVelocityX(-25)
        }

        /* Sentido no eixo Y */
        const diffY = alvo.y - this.persaComum1.y
        if (diffY >= 10) {
          this.persaComum1.setVelocityY(25)
        } else if (diffY <= 10) {
          this.persaComum1.setVelocityY(-25)
        }
      }
    }
    catch (error) {
      console.error(error)
    }
  }

  defeat () {
    this.game.scene.stop('cena3')
    this.game.scene.start('defeat')
  }

  morte () {
    this.personagem.disableBody(true, true)
  }
}
