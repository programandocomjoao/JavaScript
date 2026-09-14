validar = function() {
  let a = Number(document.getElementById('A').value)
  let b = Number(document.getElementById('B').value)
  let c = Number(document.getElementById('C').value)

  if(a >= b + c || b >= c + a || c >= a + b) {
    document.getElementById('resultado').value = 'NÃO FORMA TRIÂNGULO'
    document.getElementById('triangulo').src = 'naotem.jpg'
  }
  else if(a == b && b == c) {
    document.getElementById('resultado').value = 'FORMA TRIÂNGULO EQUILÁTERO'
    document.getElementById('triangulo').src = 'Equilatero.png'
  }
  else if(a != b && b != c && c != a) {
    document.getElementById('resultado').value = 'FORMA TRIÂNGULO ESCALENO'
    document.getElementById('triangulo').src = 'Escaleno.png'
  }
  else {
    document.getElementById('resultado').value = 'FORMA TRIÂNGULO ISÓSCELES'
    document.getElementById('triangulo').src = 'Isosceles.png'    
  }
}