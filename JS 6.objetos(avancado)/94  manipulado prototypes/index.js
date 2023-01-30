/*construtura new Object -> Object.prototype

const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};


const objB = {
    chave: 'B'
    // __proto__: ObjA
};

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA); */


function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco*(percentual / 100 ));
};


Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco*(percentual / 100 ));
};


const p1 = new Produto('camiseta', 50);
console.log(p1);

//literal
const p2 = {
    nome : 'caneca',
    preco : 15
}

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10)

console.log(p2);


const p3 = Object.create(Produto.prototype, {
    preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 133

    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 133
    },
});

p3.aumento(10);
console.log(p3);