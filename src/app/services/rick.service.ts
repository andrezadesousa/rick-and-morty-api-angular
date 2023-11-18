import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RickService {
  filteredList: any[] = [];
  avatars!: any[];
  info!: any;
  pesquisa: string = '';

  constructor(private httpCliente: HttpClient) {
    // this.carregarAvatars();
  }

  async carregarAvatars() {
    const requisicao = await this.httpCliente
      .get<any>('https://rickandmortyapi.com/api/character')
      .toPromise();

    this.avatars = requisicao.results;
    this.filteredList = requisicao.results;

    // console.log(this.avatars);
  }

  async carregarPersonagem(id: number) {
    const requisicao = await this.httpCliente
      .get<any>(`https://rickandmortyapi.com/api/character/${id}`)
      .toPromise();

    // console.log(requisicao);

    return requisicao;
  }

  async carregarMaisPersonagens(pageList: number) {
    const requisicao = await this.httpCliente
      .get<any>(`https://rickandmortyapi.com/api/character/?page=${pageList}`)
      .toPromise();

    this.avatars.push(...requisicao.results);
    this.info = requisicao.info;

    if (this.pesquisa !== '') {
      const novosFiltrados = requisicao.results.filter((item: any) => {
        return item.name.toLowerCase().includes(this.pesquisa.toLowerCase());
      });
      this.filteredList.push(...novosFiltrados);
      return;
    }

    this.filteredList.push(...requisicao.results);
  }

  filterList(name: string) {
    this.filteredList = this.avatars.filter((item) => {
      return item.name.toLowerCase().includes(name.toLowerCase());
    });
    this.pesquisa = name;
  }
}
