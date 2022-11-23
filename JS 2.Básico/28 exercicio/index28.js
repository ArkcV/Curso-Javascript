const numero = Number(prompt('digite um Numero'));

const titulo = document.getElementById('title');
const texto = document.getElementById('text');

titulo.innerHTML = `O seu Numero : <strong>${numero}<strong>`;
texto.innerHTML +=`O seu Numero somado a 1 é igual : <strong>${Number(numero) + 1}</strong></br>`
texto.innerHTML +=`A raiz quadradado é : <strong>${Math.sqrt(numero)}</strong></br>`
texto.innerHTML +=`É NaN : <strong>${Number.isNaN(numero)}<strong></br>`
texto.innerHTML +=`Arredondado pra cima : <strong>${Math.ceil (numero)}<strong></br>`
texto.innerHTML +=`Arredondado pra baixo: <strong>${Math.floor(numero)}<strong></br>`
