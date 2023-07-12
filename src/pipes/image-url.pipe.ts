import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {
  transform(pokemon: string): string {
    // Perform the image URL conversion logic
    // Example: Add a prefix or modify the path

    // Example: Add the prefix 'https://example.com/'
    return `https://img.pokemondb.net/artwork/large/${pokemon}.jpg`;
  }
}