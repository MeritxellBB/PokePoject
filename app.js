let pokemonContainer = document.getElementById("pokemonContainer"); //asignar cual es el elemento html que voy a querer modificar (Id)

async function getPokemons() {                                                //funcion que nos devuelve los pokemon que hay en la api
  let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150"); //peticion al fetch y la respuesta que nos da la guardo en la var reponse
  let pokemons = await response.json();                                     //utilizamos la var pokemons para guardar respuesta en formato json
  return pokemons.results;                                                 //nos devuelve lista pokemons que estan dentro del atributo results de la api
}

async function getPokemonDetail(pokemonURL) {                //esta funcion nos va a dar los detalles de cada pokemon en concreto
  const response = await fetch(pokemonURL);
  const pokemon = await response.json();
  return pokemon;
}

getPokemons().then(pokemons => {                                  //llamo getpokemons con then para obtener return de función. Valor esta en pokemons
    for (const pokemon of pokemons) {                            //me recorro array de pokemons con for of y cada elemento esta dentro de pokemon
        getPokemonDetail(pokemon.url).then(pokemonDetail => {    //hago llamada a la api (getpokemonDetail) para traerme info de cada pokemon (en cada iteracion URL diferente)
          //console.log(pokemonDetail.moves[0].move.name);
            pokemonContainer.innerHTML= pokemonContainer.innerHTML + `<div class="pokemonBox"><p>${pokemonDetail.name}</p> <img src="${pokemonDetail.sprites.front_default}"><div><ul><li>${pokemonDetail.moves[0].move.name}</li><li>${pokemonDetail.moves[1].move.name}</li><li>${pokemonDetail.moves[2].move.name}</li><li>${pokemonDetail.moves[3].move.name}</li><li>${pokemonDetail.moves[4].move.name}</li></ul></div></div> `
        })       //el innerHTML de pokemonContainer nos permite decidir el contenido de ese div. Como queremos añadir cosas en cada iteracion le hacemos el + para que en cada iteracion nos añada lo siguiente.
    }
});