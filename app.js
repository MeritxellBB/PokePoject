let pokemonContainer = document.getElementById("pokemonContainer");

async function getPokemons() {
  let reponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  let pokemons = await reponse.json();
  return pokemons.results;
}

async function getPokemonDetail(pokemonURL) {
  const reponse = await fetch(pokemonURL);
  const pokemon = await reponse.json();
  return pokemon;
}

getPokemons().then(pokemons => {
    for (const pokemon of pokemons) {
        getPokemonDetail(pokemon.url).then(pokemonDetail => {
            pokemonContainer.innerHTML= pokemonContainer.innerHTML + `<div class="pokemonBox"><p>${pokemonDetail.name}</p> <img src="${pokemonDetail.sprites.front_default}"></div>`
        })
    }
});