calcularQuadrado = function(n) {
  let q = Math.pow(n, 2)

  return q
}

calcularDelta = function(a, b, c) {
  let d = calcularQuadrado(b) - 4 * a * c

  return d
}

calcularX1 = function(a, b, c) {
  let x1 = (-b + Math.sqrt(calcularDelta(a, b, c))) / (2 * a)

  return x1
}

calcularX2 = function(a, b, c) {
  let x2 = (-b - Math.sqrt(calcularDelta(a, b, c))) / (2 * a)

  return x2
}