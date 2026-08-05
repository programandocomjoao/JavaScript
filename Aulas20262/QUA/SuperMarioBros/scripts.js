let mario = document.getElementById('mario')
let cano = document.getElementById('cano')
let gameover = document.getElementById('gameover')

function pular() {
  mario.classList.add('pulo')

  setTimeout(function() { mario.classList.remove('pulo') }, 500)
}

document.addEventListener('keydown', pular)

let colisao = setInterval(function() {
  let posCano = cano.offsetLeft
  let posMario = mario.offsetTop

  if(posCano > 0 && posCano < 80 && posMario > 214) {
    gameover.style.visibility = 'visible'

    cano.style.animation = 'none'
    cano.style.left = posCano + 'px'

    mario.src = 'imagens/perdeu.png'
    mario.style.width = '76px'
    mario.style.top = posMario + 'px'
    mario.style.marginLeft = '25px'
    mario.style.animation = 'none'

    clearInterval(colisao)
  }
}, 10)