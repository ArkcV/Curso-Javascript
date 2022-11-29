const parag = document.querySelector('.paragrafos');
const ps = parag.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgrondColorBody = estiloBody.backgroundColor;

for (let p of ps){
    p.style.backgroundColor = backgrondColorBody;
    p.style.color = 'white'
}