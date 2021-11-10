let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 1 - exibir valores do array

 for (i=0; i<numbers.length; i+=1){
   console.log(numbers[i])
 } 

 console.log("/br")
//Exercício 2 - somar valores do array

let total=0
for(i=0; i<numbers.length; i+=1) {
 total+=numbers[i]; 
}
console.log(total) 
console.log("/br")
//Exercício 3 -  crair média aritmética

let soma=0;
for (i=0; i<numbers.length; i+=1) {
 soma=soma + numbers[i];
}
console.log(soma/numbers.length)
console.log("/br")

//Exercício 4 -  Imprima se o valor é maior que 20 ou se é menor ou igual a 20
if (soma/numbers.length>20) {
  console.log("valor maior que 20")
}
else {
  console.log("valor menor ou igual a 20")
}
console.log("/br")

//Exercício 5 - imprima o maior valor do array com o for
let resultado=0

for (let i=0; i<numbers.length; i+=1){

  if(numbers[i] > numbers[i+1] && numbers[i] > resultado){
    resultado=numbers[i]
  }
  if(numbers[i]===numbers[numbers.length-1] && numbers[i] > resultado){
    resultado=numbers[i]
  }
}
console.log(resultado)

