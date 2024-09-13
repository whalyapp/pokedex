import PokemonInfo from "./components/PokemonInfo";
import PokemonDetail from "./containers/PokemonDetail";

const data = {
  "base_happiness": 50,
  "capture_rate": 45,
  "color": {
      "name": "green",
      "url": "https://pokeapi.co/api/v2/pokemon-color/5/"
  },
  "evolution_chain": {
      "url": "https://pokeapi.co/api/v2/evolution-chain/1/"
  },
  "evolves_from_species": null,
  "flavor_text_entries": [
    {
      "flavor_text": "Au matin de sa vie, la graine sur\nson dos lui fournit les éléments\ndont il a besoin pour grandir.",
      "language": {
          "name": "fr",
          "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "version": {
          "name": "black",
          "url": "https://pokeapi.co/api/v2/version/17/"
      }
  },
  ],
  "form_descriptions": [],
  "forms_switchable": false,
  "gender_rate": 1,
  "genera": [
    {
      "genus": "Pokémon Graine",
      "language": {
          "name": "fr",
          "url": "https://pokeapi.co/api/v2/language/5/"
      }
  },
  ],
  "generation": {
      "name": "generation-i",
      "url": "https://pokeapi.co/api/v2/generation/1/"
  },
  "growth_rate": {
      "name": "medium-slow",
      "url": "https://pokeapi.co/api/v2/growth-rate/4/"
  },
  "habitat": {
      "name": "grassland",
      "url": "https://pokeapi.co/api/v2/pokemon-habitat/3/"
  },
  "has_gender_differences": false,
  "hatch_counter": 20,
  "id": 1,
  "is_baby": false,
  "is_legendary": false,
  "is_mythical": false,
  "name": "bulbasaur",
  "names": [
    {
      "language": {
          "name": "fr",
          "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "name": "Bulbizarre"
  },
  ],
  "order": 1,
};

export default function Home() {
  return (
    <div>
      <PokemonDetail />
    </div>
  );
}
