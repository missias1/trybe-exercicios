// PARTE 1 - MODIFICAR A FUNÇÃO ABAIXO PARA QUE CONTENHA UMA ARROW FUNCTION, TEMPLATE LITERALS E IF TERNÁRIO 

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);


const testingScope = escopo => {
  
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(false);

//PARTE 2 - CRIE UMA FUNÇÃO QUE RETORNE O ARRAY ABAIXO EM ORDEM CRESCENTE
//https://www.alura.com.br/artigos/ordenacao-de-numeros-no-javascript-nao-funciona

//OPÇÃO A
function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(`Os numeros ${oddsAndEvens.sort(comparaNumeros)} se encontram ordenados em forma crescente`)

//OPÇÃO B
const ordena = (oddsAndEvens)=> {
  let novoArray=oddsAndEvens;
  for(let index = 0; index <oddsAndEvens.length-1; index+=1){
  for(let i = 0; i<oddsAndEvens.length-1; i+=1){
    if(oddsAndEvens[i]<oddsAndEvens[i+1]){
      novoArray[i]= oddsAndEvens[i]
    } else if(oddsAndEvens[i]>oddsAndEvens[i+1]){
      let numeroMaior = oddsAndEvens[i]
      novoArray[i] = oddsAndEvens[i+1]
      novoArray[i+1] = numeroMaior
    }
  }
}
console.log(`Os números ${novoArray} se encontram em ordem crescente`)
}

ordena(oddsAndEvens)