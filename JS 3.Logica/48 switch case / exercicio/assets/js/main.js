const h1 = document.querySelector('#text');
const data = new Date();

function dayWeek (diaSemana){
    let diaSemanaTexto;
     switch(diaSemana){
        case 0:
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terca-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto ='sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto ='sabado';
            return diaSemanaTexto;
     }
};

function nameWeek(Numeromes){
    let mesNumeroTexto;
     switch(Numeromes){
        case 0:
            mesNumeroTexto= 'janeiro';
            return mesNumeroTexto;
        case 1:
            mesNumeroTexto = 'fevereiro';
            return mesNumeroTexto;
        case 2:
            mesNumeroTexto= 'marco';
            return mesNumeroTexto;
        case 3:
            mesNumeroTexto = 'abril';
            return mesNumeroTexto;
        case 4:
            mesNumeroTexto = 'maio';
            return mesNumeroTexto;
        case 5:
            diaSemanaTexto ='junho';
            return mesNumeroTexto;
        case 6:
            mesNumeroTexto ='julho';
            return mesNumeroTexto;
        case 7:
            mesNumeroTexto = 'agosto';
            return  mesNumeroTexto;
        case 8:
            mesNumeroTexto = 'setembro';
            return mesNumeroTexto;
        case 9:
            mesNumeroTexto = 'outubro';
            return mesNumeroTexto;
        case 10:
            mesNumeroTexto = 'novembro'
            return mesNumeroTexto;
        case 11:
            mesNumeroTexto = 'dezembro';
            return mesNumeroTexto;
     }
};

function zero(numzero){
    return numzero >= 10 ? numzero : `0${numzero}`
}

function criarData(data){y
    const diaSemana = data.getDay();
    const Numeromes = data.getMonth();

    const diaSemanaTexto = dayWeek (diaSemana);
    const mesNumeroTexto = nameWeek (Numeromes);

    return`${diaSemanaTexto},${data.getDate()} de ${mesNumeroTexto}, ${data.getFullYear()}
    ${zero(data.getHours())}:${zero(data.getMinutes())}`
}

h1.innerHTML = criarData(data);