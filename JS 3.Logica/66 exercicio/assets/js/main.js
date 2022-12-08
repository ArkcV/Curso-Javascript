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
        iniciarRelogio();
        clearInterval(timer);
        relogio.classList.remove('pausado');
        console.log('Você clicou em iniciar');
    };

    if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
        console.log('Você clicou em pausar');
    };

    if(el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.classList.remove('pausado');
        segundos = 0;
        relogio.innerHTML = "00:00:00";
        console.log('Você clicou em zera');
    };
});
