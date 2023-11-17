import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  constructor(public pokemonService: PokemonService){}
}
