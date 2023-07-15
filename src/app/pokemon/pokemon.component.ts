import { Component, Input } from '@angular/core';
import { PokemonsModel } from 'src/interfaces';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  typeColor = {
    bug: '#26de81',
    dragon: '#ffeaa7',
    electric: '#fed330',
    fairy: '#FF0069',
    fighting: '#30336b',
    fire: '#f0932b',
    flying: '#81ecec',
    grass: '#00b894',
    ground: '#EFB549',
    ghost: '#a55eea',
    ice: '#74b9ff',
    normal: '#95afc0',
    poison: '#6c5ce7',
    psychic: '#a29bfe',
    rock: '#2d3436',
    water: '#0190FF',
  };

  textStats = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    'special-attack': 'SATK',
    'special-defense': 'SDEF',
    speed: 'SPD',
  }
  @Input() pokemonData: PokemonsModel[] = [];

  getTitleName(key: string): string {
    return this.textStats[key as keyof typeof this.textStats];
  }
}
