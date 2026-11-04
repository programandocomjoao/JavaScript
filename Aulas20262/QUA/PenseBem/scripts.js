let programa = 0
let pergunta = 0
let tentativa = 1
let pontuacao = 0

let gabarito021 = new Array('B', 'A', 'A', 'D', 'C')
let gabarito022 = new Array('B', 'D', 'A', 'B', 'A')
let gabarito023 = new Array('B', 'A', 'D', 'B', 'B')
let gabarito024 = new Array('B', 'A', 'D', 'B', 'D')
let gabarito025 = new Array('C', 'C', 'D', 'D', 'A')

let gabarito = new Array()
let i = 0

iniciar = function() {
  programa = prompt('Digite o código do programa(021 a 025):', '')

  if(programa == '021') {
    gabarito = gabarito021
    pergunta = 1
  }
  else if(programa == '022') {
    gabarito = gabarito022
    pergunta = 31
  }
  else if(programa == '023') {
    gabarito = gabarito023
    pergunta = 61
  }
  else if(programa == '024') {
    gabarito = gabarito024
    pergunta = 91
  }
  else if(programa == '025') {
    gabarito = gabarito025
    pergunta = 121
  }
  else {
    alert('Código de Programa Inválido!')
    iniciar()
  }

  tentativa = 1
  pontuacao = 0
  i = 0

  document.getElementById('tela1').value = `${programa}:${pergunta}`
  document.getElementById('tela2').value = `Tentativa ${tentativa} de 3`
  document.getElementById('tela2').style.border = 'black 3px solid'
}

jogar = function(resposta) {
  if(resposta == gabarito[i]) {
    document.getElementById('tela2').style.border = 'green 3px solid'

    if(tentativa == 1)
      pontuacao += 3
    else if(tentativa == 2)
      pontuacao += 2
    else if(tentativa == 3)
      pontuacao++

    pergunta++
    i++
    tentativa = 1
  }
  else {
    document.getElementById('tela2').style.border = 'red 3px solid'
    tentativa++

    if(tentativa > 3) {
      pergunta++
      i++
      tentativa = 1
    }
  }

  document.getElementById('tela1').value = `${programa}:${pergunta}`
  document.getElementById('tela2').value = `Tentativa ${tentativa} de 3`

  if(i == 5) {
    document.getElementById('tela1').value = '***FIM***'
    document.getElementById('tela2').value = `Pontuação: ${pontuacao}`
  }
}