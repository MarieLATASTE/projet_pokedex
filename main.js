let pokemonId = 25;
/*let apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;


/*const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '25',
}

const {url, type, id} = apiData
const apiUrl = `${url}${type}/${id}`*/

const colors = {
  fire:'#FDDFDF',
  grass:'#DEFDE0',
  electric:'#FCF7DE',
  water:'#DEF3FD',
  ground:'#f4e7da',
  rock:'#d5d5d4',
  fairy:'#fceaff',
  poison :'#98d7a5',
  bug:'#f8d5a3',
  dragon:'#97b3e6',
  psychic:'#eaeda1',
  flying:'#F5F5F5',
  fighting:'#E6E0D4',
  normal:'#F5F5F5'
};

function getData(id) {
  let apiURL = `https://pokeapi.co/api/v2/pokemon/${id}`
  fetch(apiURL)
    .then( (data) => data.json())
    .then ( (pokemon) => generateHtml(pokemon))
}

/*fetch(apiUrl)
    .then( (data) => data.json())
    .then ( (pokemon) => generateHtml(pokemon))*/

getData(pokemonId);

function pokeSlideRight() {
  pokemonId ++;
  getData(pokemonId);
}

function pokeSlideLeft() {
  pokemonId --;
  getData(pokemonId);
}

const generateHtml = (data) => {
  console.log(data)
  const html = `
  
<div class="poke-container">

<div class="prokemon">
<h1 class="name">${data.name}</h1>
<h2 class = "name">Id : ${data.id}</h2>

<div class="img-container">
<img src=${data.sprites.front_default}>
<img src=${data.sprites.back_default}>
</div>
</div>

<div class="details">
<h3>${data.types[0].type.name}</h3>
</div>


<div class="technique">
<div class="abilities">
<h4>${data.abilities[0].ability.name}</h4>
 <h4>${data.abilities[1].ability.name}</h4>
</div>


<div class="self">
<div class="weapon">
<div class="knife"><img src="knife.png" width="30"></div> <div class="points">${data.stats[1].base_stat}</div>
</div>

<div class="duo">

<div class="skull"><img src="skull.png" width="30"></div>
 <div class="points">${data.stats[2].base_stat}</div>
<div class="heart"><img src="heart.png" width="30"></div> <div class="points">${data.stats[0].base_stat}</span></div>
</div>

</div>
</div>
 </div>

`
  
  const pokemonDiv = document.querySelector('.pokemon')
  pokemonDiv.innerHTML = html
  
 
}


