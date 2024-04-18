var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`);

hora < 12 ? console.log('Bom dia'): hora < 18 ? console.log('Boa tarde') : console.log('Boa noite')