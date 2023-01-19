/*IIFE -> Immediately invoked function expression*/
// Fugir do escopo global essa funcao precisa esta dentro do paretense
(function (idade,peso,altura){
   const sobrenome ='Miranda';
   function CriaNome(nome) {
    return nome + ' ' + sobrenome;
   }

   function falaNome(){
    console.log(CriaNome('luiz'))
   }

   falaNome();
   console.log(idade,peso,altura)
})(30, 80, 1.80);


//const nome = 'Otavio';