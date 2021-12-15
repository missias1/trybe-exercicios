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

const adicionaTurno = (objeto, chave, valor) => {
  objeto[chave]=valor
  //console.log(objeto)
  return objeto
}

adicionaTurno(lesson2,'turno', 'noite' )

const exibeChaves = (objeto)=> {
  //console.log(Object.keys(objeto))
  return Object.keys(objeto)
}

exibeChaves(lesson1)

const tamanhoDoObjeto = (objeto)=> {
  //console.log(Object.keys(objeto).length)
  return Object.keys(objeto).length
}

tamanhoDoObjeto(lesson1)

const valoresDoObjeto = (objeto)=> {
  //console.log(Object.values(objeto))
  return Object.values(objeto)
}

valoresDoObjeto(lesson1)

const allLessons= Object.assign({}, lesson1)

console.log(allLessons)