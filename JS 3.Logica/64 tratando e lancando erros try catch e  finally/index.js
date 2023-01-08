/*try {
    //e execultado quando nao a erros
}
catch (e) {
    // e execultado quando ha erro
}
finally{
    //sempre
}*/

/*try {
  console.log(a);
  console.log('Abri o arquivo');
  console.log('Manipulei o arquivo');
  console.log('Fechei o arquivo');

  try {
    console.log(b);
  }
  catch {
    console.log('Deu erro');
  }
  finally {
    console.log('tambem sou finally');
  }

 }
 catch (e) {
  console.log('Tratando erro');
     
 }
 finally {
  console.log('FINALLY: Eu sempre sou 
    console.log(i,fizzBuzz(i));
};
    console.log(i,fizzBuzz(i));
};
    console.log(i,fizzBuzz(i));
};');
     
 }*/

function retorneHora (data) {
    if(data && !(data instanceof Date)){
        throw new TypeError ('Esperando instancia de Date.');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {

    });
}

const hora = retorneHora();
console.log(hora);

//retorneHora(11);
retorneHora(new Date());