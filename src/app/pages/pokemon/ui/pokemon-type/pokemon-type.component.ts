import { Component, Input } from '@angular/core';
import { badgeColors } from 'src/shared-ui/colors';

@Component({
  selector: 'app-pokemon-type',
  standalone: true,
  template: ` {{ type }} `,
  host: { class: 'badge-group', '[class]': 'hbTypeClass' },
})
export class PokemonTypeComponent {
  @Input({ required: true }) type = '';

  private get hbTypeClass() {
    return (badgeColors as Record<string, string>)[this.type];
  }
}
