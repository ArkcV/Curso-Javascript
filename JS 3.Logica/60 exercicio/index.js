// escreva uma funcao que recebe 2 numeros e retorne o maior deles
//refatorar melhoria

/*function max(x, y) {
    if(x > y){
        return x;
    }else{
        return y;
    }
}

let result = max(2,5);
console.log(result);
*/


/*refatorar

function max(x, y) {
    if (x > y) return x;
    return y;
}
console.log(max(50,10));*/

//arrow
/*const max2 = (x , y) => {
    return x > y ? x : y;
}
console.log(max2(10,5));*/


const minnum = (x, y) => {
    return x < y ? x : y ;
}
console.log(minnum(10,2));




