// Placeholder Image (Question Mark)
const placeholderImage = "https://upload.wikimedia.org/wikipedia/commons/9/99/Question_mark.svg";

const getPokemon = async () => {
    try {
        const pokemonName = document.getElementById('searchName').value.trim().toLowerCase();
        const displayPokemon = document.getElementById('pokemonImg');

        if (!pokemonName) {
            displayPokemon.src = placeholderImage;
            displayPokemon.alt = "Unknown Pokémon";
            return;
        }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error('Pokémon not found');
        }

        const data = await response.json();
        displayPokemon.src = data.sprites.front_default;
        displayPokemon.alt = pokemonName;
    } catch (error) {
        console.error(error);
        document.getElementById('pokemonImg').src = placeholderImage; // Show placeholder if Pokémon is not found
    }
};

// Set the placeholder image on page load
window.onload = () => {
    document.getElementById('pokemonImg').src = placeholderImage;
};

// Attach event listener to the search button
document.getElementById('searchBtn').addEventListener('click', getPokemon);
