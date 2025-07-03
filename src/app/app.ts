import { Component } from '@angular/core';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonSearchComponent],
  template: `<app-pokemon-search></app-pokemon-search>`,
  styleUrls: ['./app.scss']  // O elimina si está vacío
})

export class App {
  protected title = 'pokeapp-angular';
}
