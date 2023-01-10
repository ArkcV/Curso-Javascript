function criaCaculadora() {
    return {
        display: document.querySelector('.display'),
       

        //method

        /*eval() funcao vai avaliar o valor e execultar como javascript
        ele pode trazer perigo a seguranca da promacao*/

        realizaConta(){
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta invalida');
                    return;
                }
                this.display.value = String(conta);
            } catch(e) {
                alert('Conta invalida');
                return;
            }
        },
        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },
        clearDisplay(){
            this.display.value = '';
        },
        inicia(){ 
            this.cliqueBotoes();
            this.pressionaEnter();
           
        },
        pressionaEnter() {
           this.display.addEventListener('keyup', e =>{
            if(e.keyCode === 13){// esse 13 seria o enter do teclado
                this.realizaConta();
            }
           });
        },
        cliqueBotoes() {
            // this -> calculadora
           document.addEventListener('click', e => {
            const el = e.target;
           // mudandando a referencicao do this do document para a calculadora
            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }
            if(el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }
            if(el.classList.contains('btn-del')){
                this.apagaUm();
            }
            if(el.classList.contais('btn-eq')){
                this.realizaConta();
            }
           
            /*aqui estou dizendo pro Js de ves usa o This sugerido por ele 
            fazendo ele Usar o meu this ,
            essa e um forma -> }.bind(this));*/
           });
        },
        //inner.Text esta sendo enviado para esse parametro
        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}

const caculadora = criaCaculadora();
caculadora.inicia();


/*arrow funcutions nao mudam o comportamento do this
this do arrow vai ser sempre travando em quem criou o elemento*/

