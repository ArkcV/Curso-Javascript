// declaracao de funcao / (function hosting)

falaOi();



function falaOi(){
    console.log('Oi')
};

//first-class objetcs (objetos de primeira classe)
//function expression

const souUmDado = function nomeDaFuncao() {
    console.log ('sou um dado');
};


function executaFuncao (funcao){
    console.log('vou executar sua funcao abaixo')
    funcao();
}
executaFuncao(souUmDado);


// Arrow function

const funcaoArrow = () => {
    console.log('Sou um arrow function');
};
funcaoArrow();


// dentro de um objeto 

const obj = {
    falar () {
        console.log('Estou falando...')
    }
};
obj.falar();