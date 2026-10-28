let fonte = 10
let linha = 15

iniciarTamanho = function() {
  let conteudo = document.querySelector('#conteudo')  
  conteudo.style.fontSize = `${fonte}pt`
  conteudo.style.lineHeight = `${linha}pt`

  let tamanho = document.getElementById('tamanho')
  tamanho.value = fonte
}

mudarFundo = function(cor) {
  let conteudo = document.querySelector('#conteudo')
  conteudo.style.backgroundColor = cor
}

mudarTitulo = function(cor) {
  let titulo = document.getElementById('titulo')
  titulo.style.color = cor
}

mudarParagrafo = function(cor) {
  let paragrafos = document.getElementsByClassName('paragrafo')

  for(let i = 0; i < paragrafos.length; i++)
    paragrafos[i].style.color = cor
}

mudarFonte = function(fonte) {
  let conteudo = document.querySelector('#conteudo')
  conteudo.style.fontFamily = fonte
}

aumentar = function() {
  let conteudo = document.querySelector('#conteudo')

  if(fonte < 50) {
    conteudo.style.fontSize = `${++fonte}pt`
    conteudo.style.lineHeight = `${++linha}pt`

    let tamanho = document.getElementById('tamanho')
    tamanho.value = fonte
  }
}

diminuir = function() {
  let conteudo = document.querySelector('#conteudo')

  if(fonte > 8) {
    conteudo.style.fontSize = `${--fonte}pt`
    conteudo.style.lineHeight = `${--linha}pt`

    let tamanho = document.getElementById('tamanho')
    tamanho.value = fonte
  }
}