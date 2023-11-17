import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RickService {
  avatars!: any[]

  constructor(private httpCliente: HttpClient) { 
    this.carregarAvatars()
  }

  async carregarAvatars() {
    const requisicao = await this.httpCliente
      .get<any>('https://rickandmortyapi.com/api/character')
      .toPromise();

      this.avatars = requisicao.results;
      
      console.log(this.avatars);
  }
}
