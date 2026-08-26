definirRaio = function(r) {
  document.getElementById('raio').value = r
}

calcularC = function() {
  let raio = Number(document.getElementById('raio').value)
  document.getElementById('c').value = (2 * Math.PI * raio).toFixed(3)
}

calcularA = function() {
  let raio = Number(document.getElementById('raio').value)
  document.getElementById('a').value = (4 * Math.PI * Math.pow(raio, 2)).toFixed(3)
}

calcularV = function() {
  let raio = Number(document.getElementById('raio').value)
  document.getElementById('v').value = (4/3 * Math.PI * Math.pow(raio, 3)).toFixed(3)
}