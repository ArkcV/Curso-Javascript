// condicao  ? 'valor verdadeiro': 'valor falso':

const pontuacaoUsuario = 99;
const nivelUsuario = pontuacaoUsuario >= 100 ? 'Usuario Vip' : 'Usuario Normal';
console.log(nivelUsuario);


/*if(pontuacaoUsuario >= 100 ){
    console.log('Usuario Vip');
}
else{
    console.log('Usuario Normal');
}*/

const corUsuario = "";
const corpadrao = corUsuario || 'preto';
console.log(corpadrao);

