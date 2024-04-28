const date = new Date()
var hora = date.getHours()

const showHoras = document.getElementById('horaatual')
showHoras.innerHTML = `Agora são ${hora} horas.`

const background = document.getElementById('background')

hora > 18 ? background.style.background = '#000043' : 
hora > 12 ? background.style.background = '#a4b700' : 
hora < 12 ? background.style.background = '#9dd55b' :  ''


const imagem = document.getElementById('imgatual')

hora > 18 ? imagem.src = 'noite.jpg' : 
hora > 12 ? imagem.src = 'tarde.jpg' : 
hora < 12 ? imagem.src = 'manha.jpg' :   ''