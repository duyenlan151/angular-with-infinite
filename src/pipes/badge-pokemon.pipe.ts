import { Pipe, PipeTransform } from '@angular/core';
import { TPokemon } from 'src/interfaces';

@Pipe({
  name: 'badgePokemon'
})
export class BadgePokemonPipe implements PipeTransform {
  transform(type: string): string {
    return `badge-group badge-${type}`;
  }
}