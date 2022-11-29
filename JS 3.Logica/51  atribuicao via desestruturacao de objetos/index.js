/*const pessoa = {
    nome:'luiz',
    sobrenome:'miranda',
    idade:25,
    endereco:{
        rua: 'avenida brasil',
        numero: 320
    }

};

const nome = pessoa.nome;// atribuicao normal
console.log(pessoa.nome)

const {nome, sobrenome} = pessoa; // atribuicao via desestruturacao
console.log(nome, sobrenome);*/


const pessoa = {
   // nome:'luiz',
    sobrenome:'miranda',
    idade:25,
    endereco:{
        rua: 'avenida brasil',
        numero: 320
    }

};


//const {nome = "outra pessoa", sobrenome } = pessoa; // atribuicao via desestruturacao
//console.log(nome, sobrenome);

const {endereco :{rua , numero}} = pessoa
console.log(rua , numero)