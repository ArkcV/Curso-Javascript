const nome = 'Andriel';
const sobrenome = 'Marques';
const idade = 23;
const peso = 62;
const alturaemCm = 1.80;
let imc = peso/(alturaemCm*alturaemCm);
let anoNascimento = 2022 - idade ;

console.log(`Seu nome e ${nome} ${sobrenome}`)
console.log(`anos ${idade} e nascimento ${anoNascimento}`)
console.log(`pesa ${peso} , altura ${alturaemCm}, seu imc${imc}`);