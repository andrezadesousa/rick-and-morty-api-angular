import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input()
  species!: string;

  @Input()
  avatar!: string;

  @Input()
  type!: string;

  @Input()
  status!: string;

  @Input()
  gender!: string;

  @Input()
  origin!: string;

  @Input()
  location!: string;

  @Input()
  created!: string;

  @Input()
  numero!: number;

  @Input()
  image!: string;

  pegarImagemAvatar() {
    const numeroFormatado = this.leadingZero(this.numero);

    return `https://rickandmortyapi.com/api/character/avatar/${numeroFormatado}.jpeg`;
  }

  leadingZero(str: string | number, size = 1): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
}
