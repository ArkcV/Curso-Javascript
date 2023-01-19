//             -5       -4      -3        -2       -1
//              0        1       2         3        4
const nomes = ['Maria','Joao','Eduardo','Gabriel','Julia'];


/*pop
// 4 valor & 1 quantidade de elementos
//nomes.splice(4, 1)
//console.log(nomes);*/

/*pop
const removidos = nomes.splice(-1, 1);
console.log(nomes, removidos);*/

/*pop
const removidos = nomes.splice(3, 2, 'Luiz','Otavio');
console.log(nomes, removidos);*/

/*shift
const removidos = nomes.splice(0, 1,);
console.log(nomes, removidos);*/

/*push
nomes.splice(nomes.lengtht, 0, 'Luiz');
console.log(nomes);*/

/*unshift*/
nomes.splice(0, 0, 'pedro','lucas');
console.log(nomes);