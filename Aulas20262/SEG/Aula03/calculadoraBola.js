calcularComp = function() {
  let r = Number(document.getElementById('raio').value)
  document.getElementById('C').value = (2 * Math.PI * r).toFixed(3)
}

calcularArea = function() {
  let r = Number(document.getElementById('raio').value)
  document.getElementById('A').value = (4 * Math.PI * Math.pow(r, 2)).toFixed(3)
}

calcularVolume = function() {
  let r = Number(document.getElementById('raio').value)
  document.getElementById('V').value = (4/3 * Math.PI * Math.pow(r, 3)).toFixed(3)
}