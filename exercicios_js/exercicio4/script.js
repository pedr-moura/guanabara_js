var n = document.getElementById('num')
var res = document.getElementById('res')

//logica para a tabuada de * 1 a 10
function verificar(){

if (n.value == 0) {
    alert('digite um numero...')
}else{
    res.innerHTML = ''
    for (let c = 1; c <= 10 ; c++) {
        let r = c * n.value

        res.innerHTML += `
        <option>
            ${c} * ${n.value} = ${r}
        </option>
        `

    }
}


}
""