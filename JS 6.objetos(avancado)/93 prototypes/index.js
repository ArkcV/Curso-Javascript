/* Javascript e baseado em prototipos para passar propriedades e metodos
de um objeto para outro.


definicao de prototipo
Prototipo e o termo usado para se referir ao que foi criado pela
primeira vz, servindo de modelo ou molde para futuras produoces.

todos os objetos tem uam referncia interna para um prototipo (__proto__)
que vem da propriedaed prototype da funcao construtora que foi usada para
cria-lo.Qunado tentamos acessar um membro d um objeto, primeiro o motor do JS
vai tentar encontrar ese membro no proprio objeto e depois a cadeia de prototipos e usada
ate o topo(null) ate encontrar (ou nao) tal membro.
*/



// construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => "Original" + this.nome + ' ' + this.sobrenome; // esse  vai sobre escrever a funcao Pessoa.prototype
}


//Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};
 

//instacia
const pessoa1 = new Pessoa ('luiz', 'o.'); // <- pessoa = funcao construtora
const pessoa2 = new Pessoa ('maria', 'A.'); // <- pessoa = funcao construtora

console.dir(pessoa1);
console.dir(pessoa2);

