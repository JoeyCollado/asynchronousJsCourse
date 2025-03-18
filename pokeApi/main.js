// POKEDEX API / FETCH API

const getPokemon = async () => {
    try {
        const pokemonName = document.getElementById('searchName').value.trim().toLowerCase();
        
        if (!pokemonName) {
            alert("Please enter a Pokémon name!");
            return;
        }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error('Pokémon not found');
        }

        const data = await response.json();
        const pokemonImage = data.sprites.front_default;

        const displayPokemon = document.getElementById('pokemonImg');
        displayPokemon.src = pokemonImage;
        displayPokemon.alt = pokemonName;
        displayPokemon.style.display = "block";
    } catch (error) {
        console.error(error);
        alert("Could not find the Pokémon. Please try again!");
    }
};

// Attach event listener to the search button
document.getElementById('searchBtn').addEventListener('click', getPokemon);
