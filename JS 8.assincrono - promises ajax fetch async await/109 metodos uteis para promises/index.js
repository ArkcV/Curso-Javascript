function rand(min , max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() =>{
            if(typeof msg !== 'string') reject(false);
            resolve(msg);
        }, tempo);
    });
}

//Promisse.all / Promise.race / Promise.resolve/ Promise.reject


/*// Promisse.all
const promises = [
    'primeiro valor' ,
    esperaAi('Promise1 ' , 3000),
    esperaAi('Promise2 ' , 500), 
    esperaAi('Promise3 ' , 1000),
    esperaAi(1000, 1000),
    'outro valor'
];

Promise.all(promises)
.then(function(valor){
    console.log(valor)
})
.catch(function(erro){
    console.log('Erro');
})*/




/*
//Promise.race 

const promises = [

    esperaAi('Promise1 ' , rand(1, 5)),
    esperaAi('Promise2 ' , rand(1, 5)), 
    esperaAi('Promise3 ' , rand(1, 5)),
   
];

Promise.race(promises)
.then(function(valor){
    console.log(valor)
})
.catch(function(erro){
    console.log('Erro');
});
*/


function baixaPagina () {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Pagina em cache');
    }else{
        return esperaAi('baixei a pagina', 3000);
    }
}

baixaPagina()
.then (dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log('ERRO'.charAt,e))