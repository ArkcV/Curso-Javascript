/* Funcao construturora -> objetos

-Nao se pode esquecer de usar a palavra -> new

-new ela cria um novo objeto vazio ela faz o This apontar para o objeto que esta sendo ultilizado

ex: nesse caso a palavra new ela faz o seguinte 
cria um objeto vazio que faz o X -> p1
faz o this apontar pra esse objeto vazio e ele vai retornar
 implicitamente ja para a gente esse objeto para essa variavel entao
 e tambem nao e necessesario aplicar o return ela ja faz isso automaticamente



-Ela e escrita com a Primeira letra sendo maiuscula

-Entao sempre que a gente for criar uma pessoa a gente vai
ser usado Exemplo: Constrututora -> Pessoa(new)
*/

/*Funcao fabrica -> objetos*/

// atributos privados  pode ser feito nas duas factorys


function Pessoa(nome, sobrenome) {

    //Ex: ela n vai esta disponivel via notacao de ponto
 // dentro do objeto em si da factory constructures nao coloco virgulas


    const ID = 123456;
    const metodoInterno = function(){

    };
    
//Atributos ou metedos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': Sou um metodo');
    };
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Maria', 'Oliverira');
p1.metodo();
