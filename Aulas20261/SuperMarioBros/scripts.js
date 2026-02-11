const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')
const cima = document.querySelector('.cima')
const reset = document.querySelector('.reset')
const gameover = document.querySelector('.gameover')

const pular = () => {
  mario.classList.add('pulo')

  setTimeout(() => { mario.classList.remove('pulo') }, 500)
}

const colisao = setInterval(() => {
  const posCano = cano.offsetLeft
  const posMario = +window.getComputedStyle(mario).bottom.replace('px', '')

  if(posCano > 0 && posCano < 80 && posMario < 80) {
    gameover.style.visibility = 'visible'

    cano.style.animation = 'none'
    cano.style.left = posCano + 'px'

    mario.src = 'imagens/game-over.png'
    mario.style.width = '76px'
    mario.style.bottom = posMario + 'px'
    mario.style.marginLeft = '25px'
    mario.style.animation = 'none'

    clearInterval(colisao)
  }
}, 10)

document.addEventListener('keydown', pular)
cima.addEventListener('click', pular)
reset.addEventListener('click', () => { location.reload() })