//Escopo Global 

//closures e a habilidade de encontra seu escopo lexico

function retornaFuncao(nome) {
    return function(){
     return nome;   
    };
}

const funcao = retornaFuncao('luiz');// aqui esta fechando o escopo do closures
console.log(funcao());