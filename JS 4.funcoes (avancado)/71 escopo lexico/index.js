/* a funcao lembra  onde ela foi declarada e 
tudo que esta declaradodentro dela e o que esta nos vizinho dela
vizinhos na verdade e uma bolha,tambem posso acessar os vizinhos dela
*/
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