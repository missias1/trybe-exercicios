const url = 'https://api.coincap.io/v2/assets'

function fetchCrypto() {
  const ul = document.querySelector('ul');
  fetch(url).then((response)=> response.json()).then((data)=> {
    data.data.forEach((objeto, index)=> index < 10 ?
    ul.appendChild(document.createElement('li')).innerText = `${objeto.id[0].toUpperCase() + objeto.id.slice(1)} (${objeto.symbol}): ${Number(objeto.priceUsd).toFixed(2)}` : undefined)
  })

}

window.onload = () => fetchCrypto()