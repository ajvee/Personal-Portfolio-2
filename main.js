const BASE_URL = `https://animechan.vercel.app/api/random`
//const button = document.querySelector("button");
//const input = document.querySelector("input");
const main = document.querySelector('main');
const quote2 = document.querySelector('#quote2');
const character = document.querySelector('#character');
const anime2 = document.querySelector('#anime2');
const form = document.querySelector('#barS');

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

const titleURL = `https://animechan.vercel.app/api/random/anime?title=`
const searching = document.querySelector('#searching');
const anime3 = document.querySelector('#anime3');
const quote3 = document.querySelector('#quote3');

searching.addEventListener("submit", (event) => {
  event.preventDefault()
  const search = document.querySelector('#inputText')
  
  let userAnimeInput = search.value

  const url = `${titleURL}${userAnimeInput}`
 
form.reset()
fetch (url)
.then((response) => response.json())
.then((mainTitle) => {

  const show = mainTitle.quote;
  const showS = document.createElement('p');
  showS.innerHTML = `${show}`;
  quote3.append(showS);

  const animeTitle = mainTitle.anime;
  const titleS = document.createElement('p');
  titleS.innerHTML = `${animeTitle}`;
  anime3.append(titleS);

  // const show = mainTitle.character;
  // const showS = document.createElement('p');
  // showS.innerHTML = `${show}`;
  // quote3.append(showS);
  
})
})

