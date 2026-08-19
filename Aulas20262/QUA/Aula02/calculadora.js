somar = function() {
  let num1 = Number(document.getElementById('n1').value)
  let num2 = Number(document.getElementById('n2').value)

  document.getElementById('resultado').value = num1 + num2
}

subtrair = function() {
  let num1 = Number(document.getElementById('n1').value)
  let num2 = Number(document.getElementById('n2').value)

  document.getElementById('resultado').value = num1 - num2
}

multiplicar = function() {
  let num1 = Number(document.getElementById('n1').value)
  let num2 = Number(document.getElementById('n2').value)

  document.getElementById('resultado').value = num1 * num2
}

dividir = function() {
  let num1 = Number(document.getElementById('n1').value)
  let num2 = Number(document.getElementById('n2').value)

  document.getElementById('resultado').value = num1 / num2
}