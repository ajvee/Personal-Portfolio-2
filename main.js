const BASE_URL = `https://animechan.vercel.app/api/random`
const main = document.querySelector('main');
const quote2 = document.querySelector('#quote2');
const character = document.querySelector('#character');
const anime2 = document.querySelector('#anime2');
const form = document.querySelector('#barS');

form.addEventListener("submit", (event) => {
event.preventDefault()
form.reset() 

fetch(BASE_URL)
 .then((res) => res.json())
 .then((mainQuote) => {

  const animeQuote = mainQuote.quote;
  const quoteS = document.createElement('p');
  quoteS.innerHTML = `<strong><i>${animeQuote}<i></strong>`;
  quote2.append(quoteS);
  
  const animeCharacter = mainQuote.character;
  const characterS = document.createElement('p');
  characterS.innerHTML = `<strong>${animeCharacter}</strong>`;
  character.append(characterS);

  const animeShow = mainQuote.anime;
  const animeS = document.createElement('p');
  animeS.innerHTML = `<strong><u>${animeShow}<u></strong>`;
  anime2.append(animeS);
  

})
.catch((err) => console.log(err))
})

const titleURL = `https://animechan.vercel.app/api/random/anime?title=`
const characterURL = `https://animechan.vercel.app/api/random/character?name=`
const searching = document.querySelector('#searching');
const anime3 = document.querySelector('#anime3');
const quote3 = document.querySelector('#quote3');
const character2 = document.querySelector('#character2')

 searching.addEventListener("submit", (e) => {
 e.preventDefault();
  
  const search = document.querySelector('#inputText')
  
  let userAnimeInput = search.value

  const url = `${titleURL}${userAnimeInput}` && `${characterURL}${userAnimeInput}`
  
  searching.reset()
  

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

  const animeChar = mainTitle.character;
  const char = document.createElement('p');
  char.innerHTML = `${animeChar}`;
  character2.append(char);

  const prevSearch = document.querySelector('ul');
  const link = document.createElement('a');
  const x = document.createElement('li');
  link.href = '#';
  prevSearch.append(x);

  const prevS = document.querySelector('.noPrevSearch');
  prevS.innerHTML = ''

  x.anime = `${animeTitle}`
  link.innerHTML = `${userAnimeInput}`
  x.prepend(link)
  const y = document.querySelector('.searchBar')
  link.addEventListener('click', () => {
    y.innerHTML = ''
  })


  
})
})

