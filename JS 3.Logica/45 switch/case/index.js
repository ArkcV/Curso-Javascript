function getDiaSemanaTexto (diasemana){
    let diasemanatexto;


    switch(diasemana){
        case 0: 
        diasemanatexto ='domingo';
        return diasemanatexto;

        case 1: 
        diasemanatexto = 'segunda';
        return diasemanatexto;

        case 2:
            diasemanatexto = 'terca'
            return diasemanatexto;

        case 3:
            diasemanatexto = 'quarta'
            return diasemanatexto;


        case 4:
            diasemanatexto = 'quinta'
            return diasemanatexto;


        case 5:
            diasemanatexto = 'sexta'
            return diasemanatexto;


        case 6:
            diasemanatexto = 'sabado'
            return diasemanatexto;


        default:
            diasemanatexto = ''
            return diasemanatexto;

    }
}

const data = new Date();
const diasemana = data.getDay();
const diasemanatexto = getDiaSemanaTexto(diasemana);
console.log(diasemana,diasemanatexto);