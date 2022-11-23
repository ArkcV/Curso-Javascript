const nome = prompt('digite seu nome');
const sobrenome = prompt('digite seu sobrenome');
const idade = prompt('digite sua idade');




document.body.innerHTML +=`- Ola e um prazer te conhecer : <strong>${nome}</strong><br>`;
document.body.innerHTML +=`- Seu primeiro nome tem : <strong/>${nome.length}</strong> letras <br>`;
document.body.innerHTML +=`- Seu nome em maiusculas <strong>${nome.toLocaleUpperCase(nome)}</strong><br>`;
document.body.innerHTML +=`- Primeira letra do seu nome <strong>${nome[0]}</strong><br>`;
document.body.innerHTML +=`- ssa e a index da primeira letra <strong>${nome.indexOf('a')}</strong><br>`;


document.body.innerHTML +=`- Esse e seu sobrenome : <strong>${sobrenome}</strong><br>`;
document.body.innerHTML +=`- Seu segundo nome tem  : <strong>${sobrenome.length}</strong> letras <br>`;
document.body.innerHTML +=`- Seu sobrenome em maiusculas : <strong>${sobrenome.toLocaleUpperCase(sobrenome)}</strong> <br>`;
document.body.innerHTML +=`- Primeira letra do seu sobrenome <strong>${sobrenome[0]}</strong><br>`;
document.body.innerHTML +=`- Essa e a index da primeira letra <strong>${sobrenome.indexOf('m')}</strong><br>`;

document.body.innerHTML +=`- Voce tem : <strong>${idade}</strong> anos<br>`;




