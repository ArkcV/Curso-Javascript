/* return - retorna um valor ; termina a funcao


function falaFrase(comeco) { 
    function falaResto (resto) {
        return comeco + ' ' + resto; 
    }

    return falaResto;
}

const olaMundo = falaFrase('ola');// nesse caso ola mundo seria uma funcao
console.log (olaMundo('mundo')); // pra execultar ()*/


/*function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quaduplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(duplica(3));
console.log(duplica(4));*/



function falaFrase(comeco) { 
    function falaResto (resto) {
        return comeco + ' ' + resto; 
    }

    return falaResto;
}

const olaMundo = falaFrase('Ola');
console.log(olaMundo('mundo'));