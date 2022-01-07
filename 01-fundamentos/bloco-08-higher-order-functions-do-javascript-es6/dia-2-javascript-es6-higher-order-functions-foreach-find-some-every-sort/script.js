// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//  return arr.some((item) => item === name)
// }

// console.log(hasName(names, 'Ana'))

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//   return arr.every((item)=> item.age>minimumAge)
// }

// console.log(verifyAges(people, 18));

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b);
// console.log(points); // [1, 5, 10, 25, 40, 100]


//NÃO CONSEGUI FAZER, PEDIR AJUDA

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// for(let i=1; i<people.length; i+=1){
//   people.sort()
// }


// console.log(people);


const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

//Exercício 1
function authorBornIn1947(arr) {
  return arr.find((elemento)=> elemento.author.birthYear === 1947).author.name
}

console.log(authorBornIn1947(books))

//Exercício 2
function smallerName(books) {
  let nameBook;

  books.forEach((book)=>{
    if(book.name.length < nameBook.length || !nameBook){
      nameBook = book.name;
    }
  })

  return nameBook;
}

//Exercicio 3

function getNamedBook(books) {
  return books.find((book) => book.name.length === 26)
}
console.log(getNamedBook(books))

//Exercicio 4

function booksOrderedByReleaseYearDesc(books) {
  return books.sort((bookA, bookB)=> bookB.releaseYear - bookA.releaseYear)
}

console.log(booksOrderedByReleaseYearDesc(books))

//Exercicio 5
function everyoneWasBornOnSecXX(books) {
  const secXX= 1900
  return books.every((book)=> book.author.birthYear>secXX)
}
console.log(everyoneWasBornOnSecXX(books))

//Exercicio 6 
function someBookWasReleaseOnThe80s(books) {

  return books.some((book)=> book.releaseYear > 1979 && book.releaseYear <1990)
}
console.log(someBookWasReleaseOnThe80s(books));

//Exercicio 7
// function authorUnique(books) {

//     books.forEach((book)=>{
//     const ano = book.author.birthYear
//     return books.some((book)=> book.author.birthYear === ano)
//   })
// }
console.log('-------------------')
//PERGUNTAR SOBRE O MOTIVO DE NÃO FUNCIONAR, QUAL O PROBLEMA COM A LÓGICA?
// function authorUnique(books) {
//   return books.forEach((book)=> {
//     books.some((bookSome)=> bookSome.author.birthYear === book.author.birthYear)
//   })
// }

//PERGUNTAR SOBRE O GABARITO DESSA QUESTÃO E LÓGICA
function authorUnique(books){
  return books.every((book)=> 
    !books.some((bookSome)=> bookSome.author.birthYear === book.author.birthYear)
  )
}
console.log(authorUnique(books))