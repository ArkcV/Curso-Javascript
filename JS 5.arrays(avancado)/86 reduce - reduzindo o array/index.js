/*reduce e ultilizado pra reduzir o array a um valor so que e o total da soma de todos elementos*/

/*const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador,valor, indice, array){
acumulador += valor;
return acumulador;
},0);//acumulador

console.log(total);*/



/*const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador,valor, indece, array){
if(valor * 8 === 0) acumulador.push(valor);
return acumulador;
},[]);//acumulador

console.log(total);*/



//aqui esta sendo comparado ao acumulador quer seria  {nome : 'luiz', idade: 62 }, 
//com o valor que seria o resto 
const pessoas = [

    {nome : 'luiz', idade: 62 },
    {nome : 'maria', idade: 22 },
    {nome : 'joana', idade: 43 },
    {nome : 'pedro', idade: 72 }
];
const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade)return acumulador;
    return valor;
}); 
console.log(maisVelha);
