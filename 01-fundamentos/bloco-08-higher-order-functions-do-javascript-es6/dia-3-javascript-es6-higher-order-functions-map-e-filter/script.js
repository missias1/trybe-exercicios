const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];


//PERGUNTAR SOBRE O [PRODUTO], PORQUE TEMPLATE LITERALS NÃO FUNCIONA?
const tabela = (products, prices) => 
  products.map((produto, index)=> {
    return {
      [produto]: prices[index],
      // `${produto}: ${prices[index]}`, PORQUE ESSE NÃO FUNCIONA
    }
  } )


console.log(tabela(products, prices))

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

//prática 1
const alunosManha = estudantes.filter((estudante)=> estudante.turno === "Manhã")

const nomesAlunosManha = alunosManha.map((aluno) => `${aluno.nome} ${aluno.sobrenome}`)

console.log(nomesAlunosManha)

//prática 2
const situacaoAluno = (nome, estudantes) => {
  const materiasDoAluno = estudantes.find((estudante)=> estudante.nome === nome).materias;

  return materiasDoAluno.map((materia)=> `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`)
  //PROCURAR ENTENDER O TEMPLATE LITERALS NESSE RETORNO
}

console.log(situacaoAluno('Natalia', estudantes))
