const drag = document.querySelector('.drag')
const spin = document.querySelector('.spin')
const img = spin.getElementsByTagName('img')
const ground = document.querySelector('.ground')
const aEle = [...img] // ...aVid
const RADIUS = 240
const AUTO_ROTATE = true
const ROTATE_SPEED = -60
const IMG_WIDTH = 150
const IMG_HEIGHT = 190

// size of img
spin.style.width = IMG_WIDTH + 'px'
spin.style.height = IMG_HEIGHT + 'px'

// size of ground - depend on radius
ground.style.width = RADIUS * 3 + 'px'
ground.style.height = RADIUS * 3 + 'px'

const init = (daleyTime) => {
  for (let i = 0; i < aEle.length; i++) {
    aEle[i].style.transform =
      'rotateY(' + i * (360 / aEle.length) + 'deg) translateZ(' + RADIUS + 'px)'
    aEle[i].style.transition = 'transform 1s'
    aEle[i].style.transitionDelay = daleyTime || (aEle.length - i) / 3 + 's'
  }
}

const applyTransform = (obj) => {
  if (tY > 180) tY = 180
  if (tY < 0) tY = 0
  obj.style.transform = 'rotateX(' + tY + 'deg) rotateY(' + tX + 'deg)'
}

let sX,
  sY,
  nX,
  nY,
  desX = 0,
  desY = 0,
  tX = 0,
  tY = 10

const playSpin = (yes) => {
  spin.style.animationPlayState = yes ? 'running' : 'paused'
}
setTimeout(init, 3000)

// auto spin

if (AUTO_ROTATE) {
  const animationName = ROTATE_SPEED > 0 ? 'spin' : 'spinRevert'
  spin.style.animation = `${animationName} ${Math.abs(
    ROTATE_SPEED
  )}s infinite linear`
}

// add background music

const bgMusicURL = '/adele-hello.mp3'
const bgMusicControls = false

if (bgMusicURL) {
  const audio = `
  <audio src=${bgMusicURL} ${bgMusicControls ? 'controls' : ' '} autoplay loop>;
    <p> if you are reading this, it is because your browser does not support the audio element.</p>
  </audio>`
  document.getElementById('music-container').innerHTML = audio
}

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementsByTagName('audio')[0]
  audio.play()
})
