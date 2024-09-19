export interface Language {
    name: string;
    url: string;
}

export interface FlavorTextEntry {
    flavor_text: string;
    language: Language;
    version: {
        name: string;
        url: string;
    };
}

export interface Genus {
    genus: string;
    language: Language;
}

export interface PokemonColor {
    name: string;
    url: string;
}

export interface EvolutionChain {
    url: string;
}

export interface Generation {
    name: string;
    url: string;
}

export interface GrowthRate {
    name: string;
    url: string;
}

export interface Habitat {
    name: string;
    url: string;
}

export interface PokemonName {
    language: Language;
    name: string;
}

export interface PokemonData {
    base_happiness: number;
    capture_rate: number;
    color: PokemonColor;
    evolution_chain: EvolutionChain;
    evolves_from_species: null | string;
    flavor_text_entries: FlavorTextEntry[];
    form_descriptions: any[];
    forms_switchable: boolean;
    gender_rate: number;
    genera: Genus[];
    generation: Generation;
    growth_rate: GrowthRate;
    habitat: Habitat;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: string;
    names: PokemonName[];
    order: number;
}