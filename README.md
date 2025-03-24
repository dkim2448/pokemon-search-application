# pokémon search app

## overview

[link to website](https://pokemon-search-application.vercel.app/)

the pokémon search app allows users to search for pokémon, view detailed information about each pokémon, and explore their abilities, types, and stats.  
this app utilizes the database pokéapi.

## features

- **search pokémon:** find pokémon by name or id.  
- **detailed pokémon information:** access detailed stats, abilities, and type information for each pokémon.  
- **user-friendly interface:** easy-to-navigate interface for a smooth user experience.  
- **responsive design:** works seamlessly across different devices and screen sizes.

## functions

- **getpokemon(pokemon)**
  - fetches pokémon data from the api.  
  - calls `renderpokemon(data)` to display the pokémon details.  
  - alerts if the pokémon is not found.

- **renderpokemon(data)**
  - updates the pokémon image, name, and id.  
  - calls `getpokemontypes(data.types)` to display the pokémon types.  
  - calls `stylecard(themecolor)` to style the background based on the pokémon's type.  
  - calls `getpokemonstats(data.stats)` to display pokémon stats.

- **getpokemontypes(types)**
  - generates html for pokémon types and appends it to the `poketypebox`.

- **stylecard(color)**
  - updates the background color of the `colorbox` based on the pokémon’s type.

- **getpokemonstats(stats)**
  - creates and appends elements displaying pokémon stats to the `pokestats
