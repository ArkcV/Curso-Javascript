//As promises em JavaScript representam processos que já estão acontecendo, que podem ser encadeados com funções de retorno de chamada.
//Essencialmente, uma promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função.

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);

}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Bad value');
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, tempo);
    });  
}

esperaAi('Conecao com o Banco de dados', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da Base', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi('exibir dados na tela', rand(1, 3));
})
.catch(e => {
    console.log('ERRO', e);
});


console.log('Isso aqui sera exibido antes de qualquer promisse');


// then e que faz a promisse resolver 
// catch pega o erro