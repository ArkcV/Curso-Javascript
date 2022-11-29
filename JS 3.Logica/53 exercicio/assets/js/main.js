
const elementos = [
    {tag:'p', texto:'Qualquer texto que voce quiser.'},
    {tag:'div',texto: 'Frase2'},
    {tag:'section',texto: 'Frase3'},
    {tag:'footer',texto: 'Frase4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0 ; i < elementos.length; i++) {
    let {tag , texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);