/*Filter 
sempre vai retornar um array com a mesma 
quantidade de elementos ou menos
e ela recebe callback*/


// retorne os numeros maiores que 10
//               0, 1,  2,  3 ....
const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27];

const numerosFiltro = numeros.filter(valor => valor > 10);
console.log(numerosFiltro);





//retorne pessoas que tem  o nome com 5 letras ou mais  com mais de 50 e que termina com a letra a

const pessoas = [
    {nome : 'luiz', idade: 62 },
    {nome : 'maria', idade: 22 },
    {nome : 'joana', idade: 43 },
    {nome : 'pedro', idade: 12 }
];

const pessComNomeG = pessoas.filter(obj=> obj.nome.length >= 5
); 
console.log(pessComNomeG);

const pessComMaiorID = pessoas.filter(obj => obj.idade > 30)
console.log(pessComMaiorID);

const pessComLetraA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessComLetraA);