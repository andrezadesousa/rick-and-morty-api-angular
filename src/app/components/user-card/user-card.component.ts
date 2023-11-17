import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  @Input()
  pokemon!: string;

  @Input()
  name!: string;

  @Input()
  species!: string;

  @Input()
  numero!: number;

  pegarImagemPokemon(){
    const numeroFormatado = this.leadingZero(this.numero);

    return `https://rickandmortyapi.com/api/character/avatar/${numeroFormatado}.jpeg`
  }

  leadingZero(str: string | number, size = 1): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
}
