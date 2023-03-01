// Ela e igual a funcao construtora
// Ela ja linka autmaticamente faz a parte do prototype

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} esta falando`) 
    }
}



const p1 = new Pessoa('Joao','oliveira');
p1.falar('oi');
console.log(p1);