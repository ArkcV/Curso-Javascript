/*Filter sempre va retornar um array com a mesma quantidade de elementos ou menos
e ela recebe callback*/
// retorne os numeros maiores que 10
//               0, 1,  2,  3 ....
/*const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27];*/


/*funcao de callback
const numerosFiltro = numeros.filter(valor => valor > 10);
console.log(numerosFiltro);*/


/*const numerosFiltro = numeros.filter((valor, indice, array)=>{
    console.log(valor, indice, array);
    return valor > 10;
});

console.log(numerosFiltro);*/



//retorne pessoas que tem  o nome cm 5 letras ou mais  com masid e 50 e que terina com a letra a

const pessoas = [
    {nome : 'luiz', idade: 62 },
    {nome : 'maria', idade: 22 },
    {nome : 'joana', idade: 43 },
    {nome : 'pedro', idade: 12 }
];

/*const pessComNomeG = pessoas.filter(obj=> obj.nome.length >= 5
); 
console.log(pessComNomeG);*/

/*const pessComMaiorID = pessoas.filter(obj => obj.idade > 30)
console.log(pessComMaiorID);;*/

const pessComLetraA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessComLetraA);