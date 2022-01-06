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
  let index = []
  let palavras = frase.split(" ")
  console.log(palavras)
  for(let i=0; i<palavras.length; i+=1){
    index.push(palavras[i].length)
  }
  let resultado = Math.max(...index);
  console.log(resultado)
  console.log(palavras[resultado])
  console.log(index)
}

maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu")

//
const novo = n => {
  array=[]
for(let i=0; i<=n-1; i+=1){
  console.log(array)
}
console.log(array)
}
novo(3)

// const fatore = n =>  n > 0 ? 