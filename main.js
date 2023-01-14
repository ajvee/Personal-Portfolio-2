const BASE_URL = `https://animechan.vercel.app/api/random`
//const frontURL = `https://animechan.vercel.app/api/random`
//const titleURL = `?title=`//`https://animechan.vercel.app/api/random/anime
// const characterURL = `https://animechan.vercel.app/api/random/character?name=saitama`
const button = document.querySelector("button");
const input = document.querySelector("input");
const form = document.querySelector('form');
const main = document.querySelector('main');
const imgDiv =document.querySelector('div');
const quote2 = document.querySelector('#quote2');
const character = document.querySelector('#character');
const anime2 = document.querySelector('#anime2');

// form.addEventListener('submit', (event) => {
//   event.preventDefault()
//   const search = document.querySelector('#inputText')
//   let x = search.value

// const url = `${BASE_URL}${x}${titleURL}`
// form.reset()
fetch(BASE_URL)
.then((res) => res.json())
.then((mainQuote) => {

  //const hiddenLocation = document.querySelector('#anime2')
  //hiddenLocation.innerHTML = `<h2>${x}</h2>`

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

console.log()

})

//})
