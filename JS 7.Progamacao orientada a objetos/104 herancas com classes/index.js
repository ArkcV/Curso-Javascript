//super
class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(!this.ligado) {
            console.log(this.nome + ' ligado ');
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) {
            console.log(this.nome + ' desligado ');
            return;
        }
        this.ligado = false;
    }
  }

// extends vai dizer que quem vou herdar
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome);// usado com extends
        this.cor = cor;
    }
}

const s1 = new Smartphone('iPhone', 'Branco');
s1.desligar()
console.log(s1)


class Tablet extends Smartphone {
    constructor(nome, cor, ano) {
        super(nome, cor);
        this.ano = ano;

    }

    falar() {
        console.log('fala oi')
    }
}

const tablet = new Tablet ('Tablet-i','Preto', 2023)
tablet.ligar()
tablet.falar()
console.log(tablet) 