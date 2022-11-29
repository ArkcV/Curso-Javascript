//For in - le os indices ou chaves do objetos

/*const frutas = ["maca","pera","uva"];

for (let i in frutas) {
    console.log(frutas[i])

};*/

const pessoas = {
    nome:'luiz',
    sobrenome:'otavio',
    idade:30

};

for (let chave in pessoas ) {
    console.log(chave, pessoas[chave]);//essa e util quando n se sabe q informacao vou pegar
};

/*console.log(pessoa.nome);
  console.log(pessoa[chave]);essa e util quando n se sabe q informacao vou pegar
*/