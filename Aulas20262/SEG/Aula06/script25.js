function calcularDelta() {
  let a = Number(prompt('Digite o valor de A:', ''))
  let b = Number(prompt('Digite o valor de B:', ''))
  let c = Number(prompt('Digite o valor de C:', ''))

  let delta = Math.pow(b, 2) - 4 * a * c

  document.write(`<p>O delta é ${delta}</p>`)
}

calcularImc = function() {
  let peso = Number(prompt('Digite o peso em Kg:', ''))
  let altura = Number(prompt('Digite a altura em m:', ''))

  let imc = peso / Math.pow(altura, 2)

  document.write(`<p>O IMC é ${imc}</p>`)
}

mostrarHorario = () => {
  let data = new Date()

  let horas = data.getHours()
  let min = data.getMinutes()
  let seg = data.getSeconds()

  document.getElementById('hora').innerText = `Horário: ${horas}:${min}:${seg}`
}