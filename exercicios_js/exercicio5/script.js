let num = document.getElementById('n')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let array = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100)
    {   return true   }else{  return false  }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1)
    { return true }else{  return false  }
}

function add() {
    if(isNumero(num.value) && !inLista(num.value, array)) {

        array.push(Number(num.value))

        let item = document.createElement('option')
        
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)

    }else{
        alert('Valor invalido')
    }
}
function remove(){

    if (array.length == 0) {
        alert('Precisa adicionar algum valor antes de finalizar')
    } else {

    let tot = array.length
    res.innerText = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`

    }
}