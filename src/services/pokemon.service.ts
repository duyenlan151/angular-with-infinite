import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DEFAULT_LIMIT } from 'src/constants';
import { DataPokemonsModel, PokemonsModel } from 'src/interfaces';
import { Pagination } from 'src/interfaces/common';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getListPokemon({ page = 1 }: Pagination): Observable<DataPokemonsModel> {
    return this.http.get<DataPokemonsModel>(`${this.apiUrl}?limit=${page * DEFAULT_LIMIT}&offset=${(page - 1)  * DEFAULT_LIMIT}`);
  };

  getPokemon(url: string): Observable<PokemonsModel> {
    return this.http.get<PokemonsModel>(`${this.apiUrl}/${url}`);
  };
}