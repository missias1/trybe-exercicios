const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
//Exercício 1
const adicionaTurno = (objeto, chave, valor) => {
  objeto[chave]=valor
  //console.log(objeto)
  return objeto
}
adicionaTurno(lesson2,'turno', 'noite' )

//Exercício 2
const exibeChaves = (objeto)=> {
  //console.log(Object.keys(objeto))
  return Object.keys(objeto)
}
exibeChaves(lesson1)

//Exercício 3
const tamanhoDoObjeto = (objeto)=> {
  //console.log(Object.keys(objeto).length)
  return Object.keys(objeto).length
}
tamanhoDoObjeto(lesson1)

//Exercício 4
const valoresDoObjeto = (objeto)=> {
  //console.log(Object.values(objeto))
  return Object.values(objeto)
}
valoresDoObjeto(lesson1)

//Exercício 5
const allLessons= {lesson1:{}, lesson2:{}, lesson3:{}}

Object.assign(allLessons.lesson1, lesson1)
Object.assign(allLessons.lesson2, lesson2)
Object.assign(allLessons.lesson3, lesson3)

console.log(allLessons)

//Exercício 6
const totalDeAlunos = ()=>{
  const a = allLessons.lesson1['numeroEstudantes'];
  const b = allLessons.lesson2['numeroEstudantes'];
  const c = allLessons.lesson3['numeroEstudantes'];
  console.log(a+b+c)
  return a+b+c
}
totalDeAlunos(allLessons)

//Exercício 7
const exibeValorPeloNumero = (objeto, numero) => {
console.log(Object.values(objeto)[numero])
Object.values(objeto)[numero]
}
exibeValorPeloNumero(lesson1, 0)

//Exercício 8
const verificaParChaveValor = (objeto, chave, valor) => {
let chaves = Object.keys(objeto)
let valores = Object.values(objeto)
console.log(valores)
// console.log(chaves)
for(let i=0; i < chaves.length; i+=1 ){
  if(chaves[i]===chave && valores[i]===valor){
    return `Output: ${true}`
  }
}
return `Output: ${false}`
}
verificaParChaveValor(lesson1, 'turno', 'manhã');