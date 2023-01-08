/*function funcao () {
    console.log(arguments);
}
funcao('valor',1 ,2, 3);// <- argumento e pra suprir o valor do paramentro*/


/* argumentos que sustenta todos os argumentos enviados
mas so pra funcao criadas com function e nao com arrow

function funcao (a,b,c) {
  let total = 0;
  for (let argumento of arguments){
    total += argumento;
  }
 console.log(total,a,b,c);
}
funcao(1,2,3,4,5,6,7);*/



/*function funcao (a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3);*/


/*function funcao (a + b = 2 ) {
    console.log(a + b)
}
funcao(2);*/

/*function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

let obj = { nome:'luiz', sobrenome: 'otavio', idade: 20 };
funcao(obj);*/


/*function funcao([valor1, valoar2, valor3 ]) {
    console.log(valor1, valoar2, valor3);
}

funcao(['luiz','otavio',20]);*/


/*function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
    if (operador === '+') acumulador += numero;

    }
    console.log(acumulador)
}
conta('+',0, 20, 30, 40, 50);*/