let programa = 0
let pergunta = 1
let tentativa = 1
let pontuacao = 0

let gabarito = new Array()

let gabarito021 = new Array('B', 'A', 'A', 'D', 'C')
let gabarito022 = new Array('B', 'D', 'A', 'B', 'A')
let gabarito023 = new Array('B', 'A', 'D', 'B', 'B')
let gabarito024 = new Array('B', 'A', 'D', 'B', 'D')
let gabarito025 = new Array('C', 'C', 'D', 'D', 'A')

iniciar = function() {
  programa = prompt('Digite o código do programa(021 a 025):', '')

  if(programa == '021')
    gabarito = gabarito021
  else if(programa == '022')
    gabarito = gabarito022
  else if(programa == '023')
    gabarito = gabarito023
  else if(programa == '024')
    gabarito = gabarito024
  else if(programa == '025')
    gabarito = gabarito025
  else {
    alert('Código de programa inválido!\nDigite um código entre 021 e 025!')
    iniciar()
  }

  pergunta = 1
  tentativa = 1
  pontuacao = 0

  document.getElementById('tela1').value = `${programa}->${pergunta}:`
  document.getElementById('tela2').value = `Tentativa ${tentativa} de 3`
}