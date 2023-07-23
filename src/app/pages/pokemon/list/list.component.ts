import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Subject, take } from 'rxjs';
import { PokemonsModel, ResultPokemon } from 'src/interfaces';
import { PokemonService } from 'src/services/pokemon.service';
import { PokemonTypeComponent } from '../ui/pokemon-type/pokemon-type.component';

@Component({
  standalone: true,
  selector: 'app-list-pokemon',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [NgFor, NgIf, PokemonTypeComponent],
})
export class ListPokemonComponent {
  private destroyed$ = new Subject();
  pokemonData$: PokemonsModel[] = [];

  // pagegination
  page = 1;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonData();
  }

  private getPokemonData(page: number = 1): void {
    this.pokemonService
      .getListPokemon({ page })
      .pipe(take(1))
      .subscribe(
        (data) => {
          // Map data results
          data?.results.forEach((pokemon: ResultPokemon) => {
            // Get info pokemon by url
            this.pokemonService.getPokemon(pokemon.name).subscribe((data) => {
              // Push data pokemon into array
              this.pokemonData$.push({ ...pokemon, ...data });
              // console.log('this.pokemonData$: ', this.pokemonData$)
            });
          });
        }
      );
  }

  async onNearEndScroll() {
    this.page++;
    await this.getPokemonData(this.page);
  }

  async loadMoreItems() {
    this.page++;
    await this.getPokemonData(this.page);
  }
}
