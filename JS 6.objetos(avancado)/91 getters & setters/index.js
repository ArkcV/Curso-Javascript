//Getter e Setter vai fazer um metodo da funcao do objeto se simular que ele e uma propriedade
// seria tbm uma maneira de proteger a minha propriedade

//getter pra objeter o valor
//setter pra configurar o valor



// construtora 
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,// mostra a chave
        configurable: true,// configuravel
        get : function() {
            return estoquePrivado;
        },
         set: function(valor){
            if(typeof valor !== 'number'){
                console.log('Not a Number');
                return;
            }
            estoquePrivado = valor;
         }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = ' o valor que eu quero';
console.log(p1.estoque);



function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', '')
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
p2.nome = 'qualquer coisa'
console.log(p2.nome);

