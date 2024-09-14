// Declaring variables
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokeName = document.getElementById("pokemon-name");
const id = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const sprite = document.getElementById("sprite");

// Using async to fetch data from API
async function fetchData(){
    try{
        // testing if input is in the API
        const pokemonInput = searchInput.value.toLowerCase();
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonInput}`);
        const data = await response.json();

        // STATS ON TOP OF SCREEN
        pokeName.textContent = data.name.toUpperCase();
        id.textContent = `#${data.id}`;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = ` Height: ${data.height}`;

        // IMAGE
        const pokemonSprite = data.sprites.front_default;
        sprite.src = pokemonSprite;
        sprite.style.display = "block";

        // TYPE BLOCKS
        types.innerHTML = data.types.map((arr) => `<div id="single-type" class="${arr.type.name}">${arr.type.name}</div>`).join("");

        // BASE STATS TABLE
        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;

    }
    catch{
        // console.error(error);
        alert("Pokémon not found");
        reset();
    }
}

// Resets Pokemon Information
const reset = () => {
    pokeName.textContent = ""
    id.textContent = "";
    weight.textContent = "";
    height.textContent = "";
    sprite.src = "";
    hp.textContent = "";
    attack.textContent = "";
    defense.textContent = "";
    specialAttack.textContent = "";
    specialDefense.textContent = "";
    speed.textContent = "";
    types.innerHTML = "";
    searchInput.value = "";
}

searchButton.addEventListener("click", fetchData);

searchInput.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        fetchData();
    }
});