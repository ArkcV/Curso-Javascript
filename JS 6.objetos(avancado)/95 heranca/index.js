function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};



function Caneca (nome, preco, material) {
    Produto.call(this,nome, preco)
    this.material = material;
}

const caneca = new Caneca ("Caneca", 2.50, "Porcelana");
console.log(caneca);




function Camiseta (nome, preco, cor) {
    Produto.call(this,nome, preco)
    this.cor = cor;
} 

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta ('Regata', 15.0, 'Preta');
camiseta.desconto(10);
console.log(camiseta);

