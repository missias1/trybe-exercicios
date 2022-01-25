import './App.css';

const arrCompromissos = [ 'Participar da monitoria', 'fazer exercícios', 'Almoçar', 'Participar da abertura', 'estudar conteúdo do dia', 'participar da aula ao vivo','participar da mentoria técnica', 'participar do fechamento'];

const lista = ()=>{
  return arrCompromissos.map((string)=>{
    return Task(string)
  })
}

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
     <h1>Minhas tarefas do dia</h1>,
     <ul>
      {lista()}
     </ul>
    </div>
  );
}

export default App;
