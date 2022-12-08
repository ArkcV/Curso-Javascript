const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function criarSegundos (segundos) {
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR',{
        timeZone:'UTC'
    });
};

function iniciarRelogio () {
    timer = setInterval (function(){
        segundos++;
        relogio.innerHTML = criarSegundos(segundos);
    },1000);
};

document.addEventListener('click',function(e){
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        console.log('Você clicou em iniciar');
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciarRelogio();
    };

    if (el.classList.contains('pausar')) {
        console.log('Você clicou em pausar');
        clearInterval(timer);  
        relogio.classList.add('pausado');
    };

    if(el.classList.contains('zerar')) {
        console.log('Você clicou em zera');
        clearInterval(timer);
        relogio.innerHTML = "00:00:00";
        segundos = 0;
        relogio.classList.remove('pausado');
    };

});
