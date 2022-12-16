// ela lembra onde o local onde ela foi declarada
const nome = 'luiz';

function falaNome() {
 //   const nome = 'otavio'
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'otavio'
    falaNome();
}
usaFalaNome();