//

// POKEDEX API / FETCH API

const getPokemon = async () => {
    try{
        const pokemonName = document.getElementById('searchName').value.toLowerCase();
        const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!pokemonData.ok) {
            throw new Error('Could not find pokemon');
        }

        const data = await pokemonData.json();
        const pokemonImage = data.sprites.front_default;

        const displayPokemon = document.getElementById('pokemonImg');

        displayPokemon.src = pokemonImage;
        displayPokemon.style.display = "block";
    }
    catch(error) {
        console.log(error);
    }
}