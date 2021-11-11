let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 1 - exibir valores do array

 for (i=0; i<numbers.length; i+=1){
   console.log(numbers[i])
 } 

 console.log("\n")
//Exercício 2 - somar valores do array

let total=0
for(i=0; i<numbers.length; i+=1) {
 total+=numbers[i]; 
}
console.log(total) 
console.log("\n")
//Exercício 3 -  crair média aritmética

let soma=0;
for (i=0; i<numbers.length; i+=1) {
 soma=soma + numbers[i];
}
console.log(soma/numbers.length)
console.log("\n")

//Exercício 4 -  Imprima se o valor é maior que 20 ou se é menor ou igual a 20
if (soma/numbers.length>20) {
  console.log("valor maior que 20")
}
else {
  console.log("valor menor ou igual a 20")
}
console.log("\n")

//Exercício 5 - imprima o maior valor do array com o for


let resultado=0

for (let i=0; i<numbers.length; i+=1){

  if(numbers[i] > resultado){
    resultado=numbers[i]
  }
}
console.log(resultado)
console.log("\n")

//código anterior
// for (let i=0; i<numbers.length; i+=1){

//   /if(numbers[i] > numbers[i+1] && numbers[i] > resultado){
//     resultado=numbers[i]
//   }
//   if(numbers[i]===numbers[numbers.length-1] && numbers[i] > resultado){
//     resultado=numbers[i]
//   }
// }
// console.log(resultado)
// console.log("\n")



//Exercício 6 - Imprima a quantidade de números ímpares e se não houve imprima a mensagem de que não foi encontrado

let numerosImpares=0;

for (let i=0; i<numbers.length; i+=1){
  if (numbers[i]%2 > 0){
    numerosImpares+=1
  }
}
if (numerosImpares==0) {
  console.log("nenhum valor ímpar encontrado")
}
else{
  console.log(numerosImpares)
}

console.log("\n")

//código anterior 
// let numerosImpares=[];
// for (let i=0; i<numbers.length; i+=1){
//   if (numbers[i]%2 > 0){
//     numerosImpares.push(numbers[i])
//   }
// }
// console.log(numerosImpares.length)


//Exercício 7 - Descubra o menor valor do array

let menorValor=numbers[0]
for (let i=0; i<numbers.length; i+=1){

  if(menorValor > numbers[i]){
    menorValor=numbers[i]
  }
}
console.log(menorValor)
console.log("\n")

//Exercício 8 - Crie um array que contenha os números de 1 até 25;
let array=[]
for (let i=1; i<26; i+=1){
  array.push(i)
}
console.log (array)
console.log("\n")

//Exercício 9 - Com base no array do exercício anterior, crie um array contendo os elementos divididos por 2

for(let i=0; i<array.length; i+=1){
  console.log(array[i]/2)
}