/*retorne a soma do dobro de todos os pares*/
/*-> filtrar pares
  -> Dobrar os valores
  -> reduzir (somar tudo)*/

  const numeros = [5, 80, 1, 2, 57, 8];
  const numerosPares = numeros.filter(function(valor){
    return valor % 2 === 0 
  }).map(function(valor){
    return valor * 2;
  }).reduce(function(acumulador, valor){
    return acumulador + valor

  });
 
  //console.log(numerosPares)//[80,2,8]
  //console.log(numerosPares);//[160,4,16]
  //console.log(numerosPares)//180
