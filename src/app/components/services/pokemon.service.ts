import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons!: any[]

  constructor(private httpCliente: HttpClient) { 
    this.carregarPokemons()
  }

  async carregarPokemons() {
    const requisicao = await this.httpCliente
      .get<any>('https://rickandmortyapi.com/api/character')
      .toPromise();

      this.pokemons = requisicao.results;
      
      console.log(this.pokemons);
  }
}