/*let a = "A"//B
let b = "B"//C
let c = "C"//A

// isso aquie e atribuicao via desestruturacao [a ,b ,c] , array [1,2,3];

const letras = [b,c,a];
[a ,b ,c] = letras;
console.log(a,b,c);*/

/*
//               0  1  2  3  4  5  6  7  8  
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numeros; // operador rest
console.log(primeiroNumero,segundoNumero);
console.log(resto);

// ...rest = pegar resto // ...spread = espalhar distribuir*/


//                   0          1          2 
//                0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros[1][2]);