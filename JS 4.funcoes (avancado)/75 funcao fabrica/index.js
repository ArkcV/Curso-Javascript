/*funcao factory sao funcoes que retonam objetos*/
/*Quando uma funcao esta dentro de um objeto a gente chama de essa funcao de metodo */


/*pela a palavra this eu consigo acessar coisa por fora*/
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} esta ${assunto}`;

        },
        altura,
        peso,
        /*getter so pra obter o valor
        get imc()*/
        imc(){
            const indece = this.peso / (this.altura ** 2);
            return indece.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz ', 'Otavio', 1.80, 80 );
console.log(p1.fala('falando sobre JS'));
console.log(p1.imc());


/* com o this aqui eele esta asumindo o valor de p2*/
const p2 = criaPessoa('Maria ', 'Joaquna', 1.60, 42);
console.log(p2.fala('falando sobre JS'));


/* com o this*/
console.log(p1.nome);