var imagem = document.getElementById('res')

//obter as informações dos inputs
var date = new Date()
var anoAtual = date.getFullYear()

function verificar() {
    var ano = document.getElementById('ano')
    var anoValor = ano.value
    var M = document.getElementById('M')
    var F = document.getElementById('F') //F.checked = true ou false

    //verificador para o input ano
    if (ano.value.length == 0 || ano.value > anoAtual) {
        alert(`Verifique o ano, selecione algo antes de ${anoAtual}...`)
    }else{
    //logica para obter os critérios e exibir a foto correspondente
    var prefix = ''
    var sufix = ''
    var genero = ''

    M.checked == true ? prefix = 'M_' : prefix = 'F_'
    M.checked == true ? genero = 'um Homem' : genero = 'uma Mulher'

    var idade = anoAtual - parseFloat(anoValor)
    idade < 18 ? sufix = '1' : idade < 40 ? sufix = '2' : idade > 39 ? sufix = '3' : 'erro'

    var res = document.getElementById('res')
    res.innerHTML = `
    <p>Detectamos ${genero}, com ${idade} anos.</p>
    <img src="sources/${prefix}${sufix}.jpg">
    `
    }
}  