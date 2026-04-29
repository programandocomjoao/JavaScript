calcularQuadrado = function(n) {
  let quadrado = Math.pow(Number(n), 2)

  return quadrado
}

calcularDelta = function(A, B, C) {
  let delta = calcularQuadrado(B) - 4 * A * C

  return delta
}

calcularX1 = function(A, B, C) {
  let x1 = (-B + Math.sqrt(calcularDelta(A, B, C))) / (2 * A)

  return x1
}

calcularX2 = function(A, B, C) {
  let x2 = (-B - Math.sqrt(calcularDelta(A, B, C))) / (2 * A)

  return x2
}