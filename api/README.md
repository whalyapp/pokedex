1. In /pokemons/1 Replace hard coded data with API data coming from https://pokeapi.co/api/v2/pokemon-species/1'

2. Add a QS parameter "?language=fr" to filter out the 'names' array (and optionally, genera & flavor_text_entries)

3. Build an internal cache in order to not hit too hard the PokeAPI public API.

4. Add another endpoint /pokemons/:id/evolutions to display the evolution chain of the pokemon as an array of string, example:
GET /pokemons/1/evolutions
````
{ "evolutions": ["bulbasaur", "ivysaur", "venusaur"] }
```
 as "bulbasaur", "ivysaur", "venusaur"

5. Bonus: Add an IP based rate limiting