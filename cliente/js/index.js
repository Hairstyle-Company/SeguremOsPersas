import config from './config.js'
import logo from './logo.js'
import cena0 from './cena0.js'
import cena2 from './cena2.js'
import cena3 from './cena3.js'
import sala from './sala.js'
import win from './win.js'
import defeat from './defeat.js'

class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.id = 7
    this.valor = 100

    let iceServers
    if (window.location.host === 'feira-de-jogos.sj.ifsc.edu.br') {
      iceServers = [
        {
          urls: 'stun:feira-de-jogos.sj.ifsc.edu.br'
        },
        {
          urls: 'turns:feira-de-jogos.sj.ifsc.edu.br',
          username: 'adcipt',
          credential: 'adcipt20232'
        }
      ]
    } else {
      iceServers = [
        {
          urls: 'stun:stun.l.google.com:19302'
        }
      ]
    }
    this.iceServers = { iceServers }
    this.audio = document.querySelector('audio')

    this.socket = io()
    this.socket.on('connect', () => {
      console.log('conectado ao servidor!')

      this.socket.on('jogadores', (jogadores) => {
        this.jogadores = jogadores
        console.log(this.jogadores)
      })
    })

    this.scene.add('logo', logo)
    this.scene.add('cena0', cena0)
    this.scene.add('cena2', cena2)
    this.scene.add('cena3', cena3)
    this.scene.add('sala', sala)
    this.scene.add('win', win)
    this.scene.add('defeat', defeat)

    this.scene.start('logo')
  }
}

window.onload = () => {
  window.game = new Game()
}
























































