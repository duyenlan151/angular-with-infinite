import { Component } from '@angular/core';
import { PokemonModel, PokemonsModel } from 'src/interfaces';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-with-infinite';
  pokemonData$: PokemonsModel[] = [];

  // pagegination
  page = 1;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonData();
  }

  getPokemonData(page: number = 1): void {
    this.pokemonService.getListPokemon(page).subscribe(
      (data) => {
        // Map data results
        data?.results.forEach((pokemon: PokemonModel) => {
          // Get info pokemon by url
          this.pokemonService.getPokemon(pokemon.url).subscribe((data) => {
            // Push data pokemon into array
            this.pokemonData$.push({ ...pokemon, ...data });
            // console.log('this.pokemonData$: ', this.pokemonData$)
          });
        });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onNearEndScroll(): void {
    this.page += 1;
    this.getPokemonData(this.page);
  }
}
