function Calculadora() {
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear(el);
            if(el.classList.contains('btn-del')) this.del(el);
            if(el.classList.contains('btn-eq')) this.eq(el);                     
        });
    };

    this.eq = () => {
        try {
            const res = eval(this.display.value);
            if(!res) {
                alert('Conta inválida');
                return;
            }

            this.display.value = res;

        }catch(e) {
            alert('Erro');
            return;
        }
    };
    this.addNumDisplay = (el) =>{
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.del = () => this.display.value = this.display.value.slice(0, -1);
    
    this.clear = () => this.display.value = '';

    this.inicia = () => this.capturaCliques();

};

const calculadora = new Calculadora();
calculadora.inicia();