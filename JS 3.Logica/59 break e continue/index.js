const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
do{
     let numero = numeros[i]

    if (numero === 2 ){
        console.log('skip 2');
        i++
        continue;
    }
    if (numero === 7 ){
        console.log('out 7');
        i++
        break;
    }
    console.log(numero)
} while(i < numeros.length)

//continue - continua pra proxima interacao
//break - sai do laco de interacao