somar = function() {
  let n1 = Number(document.getElementById('n1').value)
  let n2 = Number(document.getElementById('n2').value)

  document.getElementById('resultado').value = n1 + n2
}

subtrair = function() {
  let n1 = Number(document.getElementById('n1').value)
  let n2 = Number(document.getElementById('n2').value)

  document.getElementById('resultado').value = n1 - n2
}

multiplicar = function() {
  let n1 = Number(document.getElementById('n1').value)
  let n2 = Number(document.getElementById('n2').value)

  document.getElementById('resultado').value = n1 * n2
}

dividir = function() {
  let n1 = Number(document.getElementById('n1').value)
  let n2 = Number(document.getElementById('n2').value)

  document.getElementById('resultado').value = n1 / n2
}

restar = function() {
  let n1 = Number(document.getElementById('n1').value)
  let n2 = Number(document.getElementById('n2').value)

  document.getElementById('resultado').value = n1 % n2
}

elevar = function() {
  let n1 = Number(document.getElementById('n1').value)
  let n2 = Number(document.getElementById('n2').value)

  document.getElementById('resultado').value = Math.pow(n1, n2)
}

enraizar1 = function() {
  let n1 = Number(document.getElementById('n1').value)

  document.getElementById('resultado').value = Math.sqrt(n1)
}

enraizar2 = function() {
  let n2 = Number(document.getElementById('n2').value)

  document.getElementById('resultado').value = Math.sqrt(n2)
}