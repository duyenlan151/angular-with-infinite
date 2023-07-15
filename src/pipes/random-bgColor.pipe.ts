import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomBgColor'
})
export class RandomBgColorPipe implements PipeTransform {
  classBgColor = {
    yellow: 'background-yellow',
    green: 'background-green',
    redorange: 'background-redorange',
    blue: 'background-blue',
  };
  transform(pokemon: string): string {
    // Perform the image URL conversion logic
    // Example: Add a prefix or modify the path

    // Example: Add the prefix 'https://example.com/'
    return 'card-background-' + Object.keys(this.classBgColor)[Math.floor(Math.random()*Object.keys(this.classBgColor).length)];
  }
}