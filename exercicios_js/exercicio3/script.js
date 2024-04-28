var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('res')

function verificar() {

    var f = Number(fim.value)
    var i = Number(inicio.value)
    var p = Number(passo.value)

    if( f == 0 || i == 0 || p == 0) {
        alert('sem numeros...')
    }else{

        res.innerHTML = 'Contando: '

        if(i < f){
            for (let index = i ; index <= f ; index += p) {

                res.innerHTML += `👉${index}` 
            }
        }else{
            for (let index = i ; index >= f ; index -= p) {

                res.innerHTML += `👉${index}` 
            }

        }

        res.innerHTML += '🏁'
    }



}

