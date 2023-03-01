// estaticos sao metodos quevoce pode acessar na classe sem instaciar a classe 
//sem ultilizar a palavra new eles tambem nao vao estar disponivel dentro da instancia
// sao como funcoes dentro da classe


class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

     //metodo de instacia
    aumentarVolume() {
        this.volume += 2; 
    }

     //metodo de instacia
    diminuirVolume() {
        this.volume -= 2; 
    }

    //metodo de estatico
    static trocaPilha(){
    console.log('OK, vou trocar.');
    }
}




const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume();//instacia
console.log(controle1);

ControleRemoto.trocaPilha();// statico



