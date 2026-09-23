function calcularFatorial() {
  let n = Number(prompt('Digite um número:', ''))
  let f = 1

  for(let i = n; i >= 1; i--)
    f *= i

  document.write(`<p>O fatorial de ${n} é ${f}</p>`)
}

const calcularSemiFatorial = function() {
  let n = Number(prompt('Digite um número:', ''))
  let f = 1

  for(let i = n; i >= 1; i -= 2)
    f *= i

  document.write(`<p>O fatorial de ${n} é ${f}</p>`)
}

mostrarHora = () => {
  let data = new Date()

  let hora = data.getHours()
  let min = data.getMinutes()
  let seg = data.getSeconds()

  document.getElementById('hora').innerText = `Hora atual: ${hora}:${min}:${seg}`
}