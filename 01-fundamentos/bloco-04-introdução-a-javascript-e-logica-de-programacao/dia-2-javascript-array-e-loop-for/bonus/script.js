//Exercicio 1 - Coloque o array em ordem crescente
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i=1; i<numbers.length; i+=1){
  for(let i2=0; i2<i; i2+=1){
    if(numbers[i] < numbers[i2]){
      let position=numbers[i];
      numbers[i]=numbers[i2];
      numbers[i2]=position;
    }
  }

};
console.log(numbers);
console.log("\n")

// Exercicio 2 - Coloque o array em ordem decrescente

for(let i=1; i<numbers.length; i+=1){
  for (let i2=0; i2<i; i2+=1){
    if(numbers[i]>numbers[i2]){
      let position=numbers[i];
      numbers[i]=numbers[i2];
      numbers[i2]=position;
    }
  }
};
console.log(numbers);

//Exercicio 3 - Crie um novo array a partir do primeiro, onde cada elemento representa a multiplicação do elemento atual vezes o elemento seguinte. E se não houver elemento seguinte, o elemtno é multiplicado por 2.

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; //Foi criado outro array (com os mesmos dados), somente para não dar conflito na hora de imprimir os resultados.

let newNumbers=[];
for (let i=0; i<numbers1.length; i+=1){
  if(numbers1[i]==numbers1[numbers1.length-1]){
    newNumbers.push(numbers1[i]*2)
  }
  else{
  newNumbers.push(numbers1[i]*numbers1[i+1])
}
}
console.log(newNumbers)