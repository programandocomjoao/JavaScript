mostrarPais = function() {
  let ano = Number(document.getElementById('ano').value)

  switch(ano) {
    case 2002:
    case 1994:
    case 1970:
    case 1962:
    case 1958:
      document.getElementById('pais').value = 'Brasil Campeão!'
      document.getElementById('bandeira').src = 'bandeiraBrasil.png'
      break
    case 2014:
    case 1990:
    case 1974:
    case 1954:
      document.getElementById('pais').value = 'Alemanha Campeã!'
      document.getElementById('bandeira').src = 'bandeiraAlemanha.png'
      break
    case 2006:
    case 1982:
    case 1938:
    case 1934:
      document.getElementById('pais').value = 'Itália Campeã!'
      document.getElementById('bandeira').src = 'bandeiraItalia.png'
      break
    case 2022:
    case 1986:
    case 1978:
      document.getElementById('pais').value = 'Argentina Campeã!'
      document.getElementById('bandeira').src = 'bandeiraArgentina.png'
      break
    case 2018:
    case 1998:
      document.getElementById('pais').value = 'França Campeã!'
      document.getElementById('bandeira').src = 'bandeiraFranca.png'
      break
    case 1950:
    case 1930:
      document.getElementById('pais').value = 'Uruguai Campeão!'
      document.getElementById('bandeira').src = 'bandeiraUruguai.png'
      break
    case 2010:
      document.getElementById('pais').value = 'Espanha Campeã!'
      document.getElementById('bandeira').src = 'bandeiraEspanha.png'
      break
    case 1966:
      document.getElementById('pais').value = 'Inglaterra Campeã!'
      document.getElementById('bandeira').src = 'bandeiraInglaterra.png'
      break
    default:
      document.getElementById('pais').value = 'Não teve Copa do Mundo neste ano!'
      document.getElementById('bandeira').src = 'naotem.jpg'
  }
}