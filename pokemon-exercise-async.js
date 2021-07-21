async function allPokemon(){
  let pokemon = [];
  let res = { 
    data: {
      next: `https://pokeapi.co/api/v2/pokemon/`
    }
  };
  while (res.data.next != null) {
    res = await axios.get(res.data.next);
    res.data.results.forEach( (el) => {
      pokemon.push(el);
    });
  }
  return pokemon
}

// arrPokemon = allPokemon();

async function getRandPokemon(num){
  console.log("Starting query...")
  arr = await allPokemon();
  console.log("Done!");
  console.log(arr.length);

  randArr = [];
  for (let i=0; i<num; i++) {
    randNum = Math.floor(Math.random() * arr.length);
    if ( !randArr.includes(arr[randNum]) ) {
      randArr.push(arr[randNum]);
    }
  }
  console.log(randArr);
  return randArr
}

// randPokemon = getRandPokemon(3);

async function getSpecies(){
  randPokemon = await getRandPokemon(3);
  speciesArr = [];
  await randPokemon.forEach( async (pokemon) => {
    console.log(pokemon);
    try {
      species = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}/`
      );
      speciesArr.push(species.data);
    } catch {
      console.log(`${pokemon.name} is an invalid name!`)
    }
    
  });
  console.log(speciesArr)
  // speciesArr.forEach( (species) => {
  //   if (species.flavor_text_entries){
  //     console.log(species.flavor_text_entries);
  //   }
  // })
}

getSpecies();