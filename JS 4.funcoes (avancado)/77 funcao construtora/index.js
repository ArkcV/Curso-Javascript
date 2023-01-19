// funcao construtora -> objetos -> Pessoa(new)
// funcao fabrica -> objetos




function Pessoa(nome, sobrenome) {

    // atributos ou metodos privados nao estao habilitados via notacao de ponto
    const ID = 123456;

    const metodoInterno = function(){

    };
//Atributos ou metodos publicos quando uso this
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': Sou um metodo');
    };
}

const p1 = new Pessoa('Luiz', 'Otavio');
p1.metodo();
