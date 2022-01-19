// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
// const piada = document.querySelector('#jokeContainer') entender pq não pode declarar a variável aqui

const fetchJoke = () => {
  const piada = document.querySelector('#jokeContainer')

  const myObject = {
    method: 'GET',
    headers: {'Accept': 'application/json'}
  };

piada.innerText = fetch(API_URL, myObject).then((response)=> response.json()).then((data)=> piada.innerText = data.joke)

};


window.onload = () => fetchJoke();