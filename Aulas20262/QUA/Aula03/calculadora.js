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

restar = function() {
  let num1 = Number(document.getElementById('n1').value)
  let num2 = Number(document.getElementById('n2').value)

  document.getElementById('resultado').value = num1 % num2
}

exponenciar = function() {
  let num1 = Number(document.getElementById('n1').value)
  let num2 = Number(document.getElementById('n2').value)

  document.getElementById('resultado').value = Math.pow(num1, num2)
}

enraizar1 = function() {
  let num1 = Number(document.getElementById('n1').value)

  document.getElementById('resultado').value = Math.sqrt(num1)
}

enraizar2 = function() {
  let num2 = Number(document.getElementById('n2').value)

  document.getElementById('resultado').value = Math.sqrt(num2)
}

limpar = function() {
  document.getElementById('n1').value = ''
  document.getElementById('n2').value = ''
  document.getElementById('resultado').value = ''
}