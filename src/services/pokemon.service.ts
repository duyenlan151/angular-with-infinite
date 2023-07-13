import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from 'src/constants';
import { DataPokemonsModel, PokemonModel } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getListPokemon(page: number = 1, offset: number = DEFAULT_OFFSET): Observable<DataPokemonsModel> {
    return this.http.get<DataPokemonsModel>(`${this.apiUrl}?limit=${page * DEFAULT_LIMIT}&offset=${(page - 1)  * DEFAULT_LIMIT}`);
  };

  getPokemon(url: string): Observable<PokemonModel> {
    return this.http.get<PokemonModel>(url);
  };
}