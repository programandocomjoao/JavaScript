calcularQuadrado = function() {
  let lado = Number(prompt('Digite o lado:', ''))

  return lado * lado
}

calcularRetangulo = function() {
  let base = Number(prompt('Digite a base:', ''))
  let altura = Number(prompt('Digite a altura:', ''))

  return base * altura
}

calcularTriangulo = function() {
  let base = Number(prompt('Digite a base:', ''))
  let altura = Number(prompt('Digite a altura:', ''))

  return (base * altura) / 2
}

calcularTrapezio = function() {
  let baseMe = Number(prompt('Digite a base menor:', ''))
  let baseMa = Number(prompt('Digite a base maior:', ''))
  let altura = Number(prompt('Digite a altura:', ''))

  return (baseMa + baseMe) * altura / 2
}