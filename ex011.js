var idade = 15

console.log(`Você tem ${idade} anos:`);
if (idade < 18) {
    console.log('Menor de idade');

    if (idade >= 16) {
        console.log('O voto é opcional');
    }else{
        console.log('Não vota');
    }
}else{
    console.log('Maior de idade');

    if (idade < 65) {
        console.log('O voto é opcional');
    }else{
        console.log('O voto é obrigatório');
    }
}