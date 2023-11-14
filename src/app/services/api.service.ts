import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  character!: any[]

  constructor(private httpCliente: HttpClient) { 
    this.carregarCharacter()
  }

  async carregarCharacter() {
    const requisicao = await this.httpCliente
      .get<any>('https://rickandmortyapi.com/api/character')
      .toPromise();

      this.character = requisicao.results;
      
      console.log(this.character);
  }
}
