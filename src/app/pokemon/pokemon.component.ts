import { Component, Input } from '@angular/core';
import { PokemonsModel } from 'src/interfaces';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  @Input() pokemonData: PokemonsModel[] = [];
}
