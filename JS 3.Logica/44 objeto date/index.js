
function zeroAEsquesda(num) {
    return num >= 10 ? num : `0${num}`;
}
 
function formataData(data){

const dia = zeroAEsquesda(data.getDay());
const mes = zeroAEsquesda(data.getMonth());
const ano = zeroAEsquesda(data.getFullYear());
const hr = zeroAEsquesda(data.getHours());
const min = zeroAEsquesda(data.getMinutes());
const seg = zeroAEsquesda(data.getSeconds());

return `${dia}-${mes}-${ano} & ${hr}:${min}:${seg}`;

};

const data = new Date();
const databrasil = formataData(data);
console.log(databrasil);