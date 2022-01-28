import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
    this.state = {
      contadorOne: 0,
      contadorTwo:0,
      contadorThree:0,
    }
    console.log(this.state)
  }

handleButtonOne(){
  console.log('Eu sou o primeiro Botão')
  this.setState((estadoAnterior)=>({contadorOne: estadoAnterior.contadorOne + 1}))
  let num = this.state.contadorOne + 1
  if(num % 2 ===0){
    console.log(num)
    console.log('Verde')
  }
}

handleButtonTwo(){
  console.log('Eu sou o segundo Botão');
  this.setState((estadoAnterior)=>({contadorTwo: estadoAnterior.contadorTwo + 1}))
  let num = this.state.contadorTwo + 1
  if(num % 2 ===0){
  console.log(num)
  console.log('Amarelo')
  }
}

handleButtonThree(){
  console.log('Eu sou o terceiro Botão')
  this.setState((estadoAnterior)=>({contadorThree: estadoAnterior.contadorThree + 1}))
  let num = this.state.contadorThree + 1
  if(num % 2 ===0){
    console.log(num)
    console.log('Vermelho')
    }
}

render(){

  const {contadorOne, contadorTwo, contadorThree} = this.state

  return(
    <div>
<button onClick = {this.handleButtonOne}>{`Contador 1: ${contadorOne}`}</button>
<button onClick = {this.handleButtonTwo}>{`Contador 2: ${contadorTwo}`}</button>
<button onClick = {this.handleButtonThree}>{`Contador 3: ${contadorThree}`}</button>
    </div>
  )
}
}

export default App;
