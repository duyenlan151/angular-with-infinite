import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PokemonsModel } from 'src/interfaces';
import { PokemonType } from './ui/pokemon-type';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  host: { class: 'pokemon-card contents' },
  imports: [NgFor, NgIf, PokemonType],
})
export class PokemonComponent {
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
