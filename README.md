<h1>Pokémon Search App</h1>
<h2>Overview</h2>
<p>The Pokémon Search App allows users to search for Pokémon, view detailed information about each Pokémon, and explore their abilities, types, and stats. This app utilizes the database PokéAPI.</p>
<h2>Features</h2>
<ul>
  <li><strong>Search Pokémon:</strong> Find Pokémon by name or ID.</li>
  <li><strong>Detailed Pokémon Information:</strong> Access detailed stats, abilities, and type information for each Pokémon.</li>
  <li><strong>User-Friendly Interface:</strong> Easy-to-navigate interface for a smooth user experience.</li>
  <li><strong>Responsive Design:</strong> Works seamlessly across different devices and screen sizes.</li>
</ul>

<h2>Functions</h2>
<ul>
    <li>
        <strong>getPokemon(pokemon)</strong>
        <ul>
            <li>Fetches Pokémon data from the API.</li>
            <li>Calls <code>renderPokemon(data)</code> to display the Pokémon details.</li>
            <li>Alerts if the Pokémon is not found.</li>
        </ul>
    </li>
    <li>
        <strong>renderPokemon(data)</strong>
        <ul>
            <li>Updates the Pokémon image, name, and ID.</li>
            <li>Calls <code>getPokemonTypes(data.types)</code> to display the Pokémon types.</li>
            <li>Calls <code>styleCard(themeColor)</code> to style the background based on the Pokémon's type.</li>
            <li>Calls <code>getPokemonStats(data.stats)</code> to display Pokémon stats.</li>
        </ul>
    </li>
    <li>
        <strong>getPokemonTypes(types)</strong>
        <ul>
            <li>Generates HTML for Pokémon types and appends it to the <code>pokeTypeBox</code>.</li>
        </ul>
    </li>
    <li>
        <strong>styleCard(color)</strong>
        <ul>
            <li>Updates the background color of the <code>colorBox</code> based on the Pokémon’s type.</li>
        </ul>
    </li>
    <li>
        <strong>getPokemonStats(stats)</strong>
        <ul>
            <li>Creates and appends elements displaying Pokémon stats to the <code>pokeStatsBox</code>.</li>
        </ul>
    </li>
</ul>

<h2>Usage</h2>

<ul>
    <li>
        <strong>Search for a Pokémon</strong>
        <ul>
            <li>Type the name of the Pokémon into the search box and press Enter.</li>
        </ul>
    </li>
    <li>
        <strong>View Details</strong>
        <ul>
            <li>The application will display the Pokémon's sprite, name, ID, type(s), and stats.</li>
        </ul>
    </li>
    <li>
        <strong>Default Pokémon</strong>
        <ul>
            <li>On initial load, the application defaults to showing information for a predefined Pokémon.</li>
        </ul>
    </li>
</ul>
