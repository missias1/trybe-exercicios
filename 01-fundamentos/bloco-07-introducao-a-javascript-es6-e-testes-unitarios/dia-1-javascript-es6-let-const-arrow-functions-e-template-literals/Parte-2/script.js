//Crie uma função que recebe um número e devolve seu fatorial
const fatorial = number => {
  let resultado = 1
  if(number===0){
    console.log(1)
  }
  for (let i = number; i>0 ; i-=1){
    resultado=resultado*i
  }
  console.log(resultado)
}

fatorial(8)

//Crie uma função que recebendo uma frase, retorna a maior palavra

const maiorPalavra = (frase) => {
  let palavras=[];
  let index = []
  palavras.push(frase.split(" "))
  for(let i=0; i<palavras[0].length; i+=1){
    index.push(palavras[0][i].length)
  }
  let resultado = Math.max(...index);
  console.log(palavras[0][resultado])
}

maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu")

//