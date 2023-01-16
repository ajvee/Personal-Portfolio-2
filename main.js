const BASE_URL = `https://animechan.vercel.app/api/random`
//const button = document.querySelector("button");
//const input = document.querySelector("input");
const main = document.querySelector('main');
//const imgDiv =document.querySelector('div');
const quote2 = document.querySelector('#quote2');
const character = document.querySelector('#character');
const anime2 = document.querySelector('#anime2');
const form = document.querySelector('#barS');

form.addEventListener('submit', (event) => {
    event.preventDefault();
form.reset()

fetch(BASE_URL)
 .then((res) => res.json())
 .then((mainQuote) => {

  const animeQuote = mainQuote.quote;
  const quoteS = document.createElement('p');
  quoteS.innerHTML = `<strong>Quote: </strong>${animeQuote}`;
  quote2.append(quoteS);
  
  const animeCharacter = mainQuote.character;
  const characterS = document.createElement('p');
  characterS.innerHTML = `<strong>Character: </strong>${animeCharacter}`;
  character.append(characterS);

  const animeShow = mainQuote.anime;
  const animeS = document.createElement('p');
  animeS.innerHTML = `<strong>Anime: </strong>${animeShow}`;
  anime2.append(animeS);

  

 })
.catch((err) => console.log(err))

})


// const titleURL = `https://animechan.vercel.app/api/random/anime`
// const form = document.querySelector('#searching');
// const anime3 = document.querySelector('#anime3')

// form.addEventListener("submit", (event) => {
//   event.preventDefault()

// fetch (titleURL)
// .then((response) => response.json())
// .then((mainTitle) => {

//   const show = mainTitle.anime;
//   const showS = document.createElement('p');
//   showS.innerHTML = `<strong>Anime: </strong>${show}`;
//   anime3.append(showS);
// })
// })

// const url = `${BASE_URL}${x}${titleURL}`
// form.reset()
// // const hiddenLocation = document.querySelector('#anime2')
// // hiddenLocation.innerHTML = `<h2>${x}</h2>`
// })
//  })

