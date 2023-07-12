export interface PokemonsModel {
  name: string;
  url: string;

  sprites?: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
}

export interface PokemonModel {
  name: string;
  url: string

  sprites?: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
}

export interface DataPokemonsModel {
  count: number;
  next: string;
  results: PokemonsModel[];
}
