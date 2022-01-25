import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

// conteudos.map(({ conteudo, bloco, status })=> {
//   return `O conteúdo é: ${conteudo}
//   Status: ${status}
//   Bloco: ${bloco}`
// })


const listaConteudo = () => conteudos.map((conteudo)=> {
  return (<p key= {conteudo.conteudo}>{`O conteúdo é: ${conteudo.conteudo},
  Status: ${conteudo.status},
  Bloco: ${conteudo.bloco}`}
  </p>)
});

class Content extends React.Component {
render (){
  return (
    <div>
    {listaConteudo()}
    </div>
  )
}
}

export default Content;