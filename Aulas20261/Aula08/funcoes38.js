function calcularDelta() {
  let A = Number(prompt('Digite o valor de A:', ''))
  let B = Number(prompt('Digite o valor de B:', ''))
  let C = Number(prompt('Digite o valor de C:', ''))

  let delta = Math.pow(B, 2) - 4 * A * C

  document.write(`<p>O delta é ${delta}</p>`)
}

calcularVm = function() {
  let distancia = Number(prompt('Digite a distância em km:', ''))
  let tempo = Number(prompt('Digite o tempo em horas:', ''))

  let vm = distancia / tempo

  document.write(`A velocidade média é ${vm}km/h`)
}