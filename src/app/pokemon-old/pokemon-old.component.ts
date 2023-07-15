import { Component, Input } from '@angular/core';
import { PokemonsModel } from 'src/interfaces';

@Component({
  selector: 'app-pokemon-old',
  templateUrl: './pokemon-old.component.html',
  styleUrls: ['./pokemon-old.component.scss']
})
export class PokemonOldComponent {
  @Input() pokemonData: PokemonsModel[] = [];
}
