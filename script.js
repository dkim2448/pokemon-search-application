// Declaration of variables
let input = document.querySelector(".search-box input");
let pokemonImg = document.querySelector(".info-box img");
let pokemonName = document.querySelector(".pokemon-name");
let pokemonId = document.querySelector(".pokemon-id");
let pokeTypeBox = document.querySelector(".pokemon-types");
let colorBox = document.querySelector(".color-box");
let pokeStatsBox = document.querySelector(".pokemon-stats");

// Using async and await for asynchronous code
const getPokemon = pokemon => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;
    fetch(url).then(res => res.json()).then(data => {renderPokemon(data)})
    .catch(() => alert("Pokémon not found"));
}

// Rendering pokemon data from API
let renderPokemon = data => {
    const sprite = data.sprites.other.dream_world.front_default;
    const name = data.name;
    const pokeId = data.id;
    const themeColor = data.types[0].type.name;
    pokemonImg.src = sprite;
    pokemonName.innerHTML = name;
    pokemonId.innerHTML = "#" + pokeId;
    getPokemonTypes(data.types);
    styleCard(themeColor);
    getPokemonStats(data.stats);
}

// Adding pokemon type from API
let getPokemonTypes = types => {
    pokeTypeBox.innerHTML = types.map((arr) => `<span class="${arr.type.name} types-style">${arr.type.name}</span>`).join("");
}

// Changing color of background and type boxes
let styleCard = color => {
    colorBox.className = "color-box";
    colorBox.classList.add(color); 
}

// Creating div and spans for pokemon information
let getPokemonStats = stats => {
    pokeStatsBox.innerHTML = "";
    stats.forEach(pokeStats => {
        let statElem = document.createElement("div");   // creating div to put into pokemon stat div
        let statElemName = document.createElement("span");  // create span to put into statElem
        let statElemValue = document.createElement("span"); // create span to put into statElem
        statElemName.innerHTML = pokeStats.stat.name;
        statElemValue.innerHTML = pokeStats.base_stat;

        // appending name and value to statElem
        statElem.appendChild(statElemName);
        statElem.appendChild(statElemValue);

        statElem.classList.add("stat-elem");
        statElemName.classList.add("stat-name");
        statElemValue.classList.add("stat-value");

        // adding statElem to pokeStatsBox div
        pokeStatsBox.appendChild(statElem);

    })
}

// For input
input.addEventListener("keyup", e => {
    if(e.key === "Enter"){
        getPokemon(input.value);
    }
})

// defaults pokemon to Infernape
getPokemon(input.value);