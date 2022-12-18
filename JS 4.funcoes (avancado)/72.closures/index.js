//escopo global 

//closures e a habilidade de encontra seu escopo lexico

function retornaFuncao(nome) {
    return function(){
     return nome;   
    }
}

const funcao = retornaFuncao('luiz');// aqui esta sendo fechado o ecopo do closures
console.log(funcao());