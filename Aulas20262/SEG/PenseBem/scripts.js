let programa = 0
let pergunta = 0
let tentativa = 1
let pontuacao = 0

let gabarito101 = new Array('A', 'D', 'C', 'B', 'B')
let gabarito102 = new Array('C', 'A', 'C', 'C', 'B')
let gabarito103 = new Array('B', 'D', 'A', 'C', 'A')
let gabarito104 = new Array('C', 'C', 'B', 'A', 'D')
let gabarito105 = new Array('D', 'B', 'A', 'D', 'C')

let gabarito = new Array()
let i = 0

iniciar = function() {
  programa = prompt('Digite o código do programa(101 a 105):', '')

  if(programa == '101') {
    gabarito = gabarito101
    pergunta = 1
  }
  else if(programa == '102') {
    gabarito = gabarito102
    pergunta = 31
  }
  else if(programa == '103') {
    gabarito = gabarito103
    pergunta = 61
  }
  else if(programa == '104') {
    gabarito = gabarito104
    pergunta = 91
  }
  else if(programa == '105') {
    gabarito = gabarito105
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

    i++
    pergunta++
    tentativa = 1
  }
  else {
    document.getElementById('tela2').style.border = 'red 3px solid'
    tentativa++

    if(tentativa > 3) {
      i++
      pergunta++
      tentativa = 1
    }
  }
  
  document.getElementById('tela1').value = `${programa}:${pergunta}`
  document.getElementById('tela2').value = `Tentativa ${tentativa} de 3` 

  if(i == 5) {
    document.getElementById('tela1').value = '***FIM***'
    document.getElementById('tela2').value = `Pontuação: ${pontuacao}`
    i = 0
  }
}