const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')
const cima = document.querySelector('.cima')
const reset = document.querySelector('.reset')
const gameover = document.querySelector('.gameover')

const pular = () => {
  mario.classList.add('pulo')

  setTimeout(() => { mario.classList.remove('pulo') }, 500)
}

document.addEventListener('keydown', pular)
cima.addEventListener('click', pular)