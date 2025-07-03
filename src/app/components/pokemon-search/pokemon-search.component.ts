import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-search',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],
  providers: [PokemonService]
})
export class PokemonSearchComponent {
  pokemonName = '';
  pokemonData: any = null;
  error = '';

  constructor(private pokemonService: PokemonService) { }

  buscarPokemon() {
    this.error = '';
    this.pokemonData = null;
    if (!this.pokemonName.trim()) return;

    this.pokemonService.getPokemon(this.pokemonName.trim().toLowerCase()).subscribe({
      next: data => {
        this.pokemonData = {
          ...data,
          stats: { ...data.stats }
        };
      },
      error: err => this.error = err.error?.error || 'Error al obtener el Pokémon'
    });
  }


  get statsList() {
    if (!this.pokemonData?.stats) return [];
    return Object.entries(this.pokemonData.stats).map(([key, value]) => ({
      key,
      value
    }));
  }
}