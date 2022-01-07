// const repeat = (number, funcao) => {
//   for(let i = 0; i<=number; i+1){
//     funcao(number)
//   }
// }

// const ePar = (number) => {
//   if(number % 2 === 0){
//     console.log(number)
//   }
// }

// console.log(repeat(10, ePar))

//----------------------------------------


// const numerosPares = (number, action) => {
//   for(let i = 0; i< number; i+=1){
//     action(i);
//   }
// };

// const isEven = (number) => {
//   if(number % 2 === 0){
//     console.log(number)
//   }
// };

// console.log(numerosPares(10, isEven))

//-----------------------------------------------------

// const wakeUp = () => {
//   return 'Acordando!!';
// };

// const breakfast = () => {
//   return 'Bora tomar café!!';
// };

// const sleep = () => 'Partiu dormir!!';

// const doingThings = (thing) => {
//   console.log(thing());
// };

// console.log(doingThings(breakfast));

//----------------------------------------------
//Exercício 1
const pessoaContratada = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
return { fullName, email:`${email}@trybe.com`};
};

console.log(pessoaContratada('Leticia Missias'))

const newEmployees = (callBack) => {
  const employees ={
    id1: callBack('Pedro Guerra'),
    id2: callBack('Luiza Drumond'),
    id3: callBack('Carla Paiva'),
  }
  return employees;
}

console.log(newEmployees(pessoaContratada))




// const resultadoSorteio = (max) => {
// const numeroSorteado = Math.floor(Math.random()*max);
// if(numeroSorteado > 5 || numeroSorteado<0){
//   return "número não esperado";
// }
// return numeroSorteado
// };

//console.log(resultadoSorteio(6))

// const hofResultadoSorteio = (callback) => {

// }

//Exercício 2
const sorteio = (number, verifica) => {

  const numeroSorteado = Math.floor(Math.random()*(5-1 +1)+1)

  if(verifica(number, numeroSorteado)){
    return "Parabéns você ganhou!"
  } else {
    return "Tente novamente!"
  }
}

const verifica = (number1, number2) => number1 === number2;

console.log(sorteio(2, verifica));

//Exercício 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const resultado = (array1, array2, contagem) => {
  return contagem(array1, array2)
}

const contagem = (param1, param2) => {
  let pontos = 0;

  for(let i = 0; i<param1.length; i+=1){
    if(param1[i] === param2[i]){
      pontos += 1;
    }
    else if(param2[i] === "N.A"){
      pontos+= 0;
    }
    else {
      pontos-= 0.5;
    }
  }
  return pontos;
}

console.log(resultado(RIGHT_ANSWERS, STUDENT_ANSWERS, contagem ));


