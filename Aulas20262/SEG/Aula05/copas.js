selecionar = function() {
  let ano = parseInt(document.getElementById('ano').value)

  switch(ano) {
    case 2010:
    case 2026:
      document.getElementById('pais').value = 'ESPANHA CAMPEÃ'
      document.getElementById('bandeira').src = 'bandeiraEspanha.png'
      break
    case 1978:
    case 1986:
    case 2022:
      document.getElementById('pais').value = 'ARGENTINA CAMPEÃ'
      document.getElementById('bandeira').src = 'bandeiraArgentina.png'
      break
    case 1998:
    case 2018:
      document.getElementById('pais').value = 'FRANÇA CAMPEÃ'
      document.getElementById('bandeira').src = 'bandeiraFranca.png'
      break
    case 1954:
    case 1974:
    case 1990:
    case 2014:
      document.getElementById('pais').value = 'ALEMANHÃ CAMPEÃ'
      document.getElementById('bandeira').src = 'bandeiraAlemanha.png'
      break
    case 1934:
    case 1938:
    case 1982:
    case 2006:
      document.getElementById('pais').value = 'ITÁLIA CAMPEÃ'
      document.getElementById('bandeira').src = 'bandeiraItalia.png'
      break
    case 1958:
    case 1962:
    case 1970:
    case 1994:
    case 2002:
      document.getElementById('pais').value = 'BRASIL CAMPEÃO'
      document.getElementById('bandeira').src = 'bandeiraBrasil.png'
      break
    case 1966:
      document.getElementById('pais').value = 'INGLATERRA CAMPEÃ'
      document.getElementById('bandeira').src = 'bandeiraInglaterra.png'
      break
    case 1930:
    case 1950:
      document.getElementById('pais').value = 'URUGUAI CAMPEÃO'
      document.getElementById('bandeira').src = 'bandeiraUruguai.png'
      break
    default:
      document.getElementById('pais').value = 'NÃO TEVE COPA DO MUNDO'
      document.getElementById('bandeira').src = 'naotem.jpg'
  }
}