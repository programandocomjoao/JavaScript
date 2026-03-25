verificarTriangulo = function() {
  let A = Number(document.getElementById('A').value)
  let B = Number(document.getElementById('B').value)
  let C = Number(document.getElementById('C').value)

  if(A >= B + C || B >= C + A || C >= A + B) {
    document.getElementById('resultado').value = 'Não forma triângulo'
    document.getElementById('triangulo').src = 'naotem.jpg'
  }
  else if(A == B && B == C) {
    document.getElementById('resultado').value = 'Forma triângulo Equilátero'
    document.getElementById('triangulo').src = 'Equilatero.png'
  }
  else if(A != B && B != C && C != A) {
    document.getElementById('resultado').value = 'Forma triângulo Escaleno'
    document.getElementById('triangulo').src = 'Escaleno.png'
  }
  else {
    document.getElementById('resultado').value = 'Forma triângulo Isósceles'
    document.getElementById('triangulo').src = 'Isosceles.png'
  }
}