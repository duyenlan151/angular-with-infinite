export type TPokemon =
  | 'Type'
  | 'Normal'
  | 'Fighting'
  | 'Flying'
  | 'Ground'
  | 'Poison'
  | 'Rock'
  | 'Bug'
  | 'Ghost'
  | 'Steel'
  | 'Fire'
  | 'Water'
  | 'Grass'
  | 'Electric'
  | 'Ice'
  | 'Dragon'
  | 'Dark'
  | 'Fairy';

interface TypePokemon {
  type: {
    name: string;
    url: string;
  };
}

interface TypeStatsPokemon {
  stat: {
    name?: string;
    url?: string;
  };

  base_stat?: number;
}

interface TypeAbilities {
  ability: {
    name?: string;
    url?: string;
  };
  // is_hidden?: boolean;
}

export interface PokemonsModel {
  id: number | undefined;
  name: string;
  url?: string;

  height: number;
  weight: number;

  sprites?: {
    other?: {
      dream_world?: {
        front_default?: string;
      };
      home?: {
        front_default?: string;
      };
      'official-artwork'?: {
        front_default?: string;
        front_shiny?: string;
      };
    };
  };

  stats: TypeStatsPokemon[];

  abilities: TypeAbilities[];

  types: TypePokemon[];
}


export interface ResultPokemon {
  name: string;
  url: string;
}

export interface PokemonModel extends ResultPokemon {
  id: number | undefined;

  height: number;
  weight: number;

  sprites?: {
    other: {
      dream_world: {
        front_default: string;
      };
      home: {
        front_default: string;
      };
      'official-artwork'?: {
        front_default: string;
        front_shiny: string;
      };
    };
  };

  stats: TypeStatsPokemon[];

  abilities: TypeAbilities[];

  types: TypePokemon[];
}


export interface DataPokemonsModel {
  count: number;
  next: string;
  previous: null;
  // results: PokemonsModel[];
  results: ResultPokemon[];
}
