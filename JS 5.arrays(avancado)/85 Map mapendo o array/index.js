/*Map - ele e parecido com o filter vai alterar valores do array
recebemos o array do mesmo tamanho com os valores alterados
assim sedno um novo array e tambem recece callback*/

// Dobre os numeros
/*const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);*/


/*para cada elemento:
retorne apenas um string com o nome da pessoa
remova apenas a chave "nome* do objeto
adicione uma chave id em cada objeto*/

  
const pessoas = [
    {nome : 'luiz', idade: 62 },
    {nome : 'maria', idade: 22 },
    {nome : 'joana', idade: 43 },
    {nome : 'pedro', idade: 12 }
];

const nomes = pessoas.map(obj => obj.nome);
const idades  = pessoas.map(obj => ({idade: obj.idade}));
const comIds = pessoas.map(function(obj,indice){
    // transformando o objeto no original
    const newObj = {...obj };
    newObj.id = indice;
    return newObj;
});
//console.log(nomes);
//console.log(idades);
//console.log(comIds);//sofreu alteracao esta sendo interado objeto original
console.log(pessoas)