/*function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${this.peso} esta ${assunto}`
        },
        peso:80 //posso acessar coisas por fora com o this
    }
}
const p1 = criaPessoa('luiz', 'otavio');
console.log(p1.fala('falando sobre Js'));*/



function criaPessoa(nome, sobrenome,peso,altura) {
    return {
        nome,
        sobrenome,
        
     // 
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome} `

        },

    // setter ->
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor);

        },


        fala(assunto) {
            return `${this.nome} esta ${assunto}`
        },
        peso,
        altura,
        //getter - get imc() -> ele vai passar a fingir ser um atributo do objeto
        imc(){
            const indice = this.peso / (this.altura**2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('luiz', 'otavio', 80, 1.80);
p1.nomeCompleto = 'maria oliveira silva'//setter
console.log(p1.nomeCompleto); // com getter 
