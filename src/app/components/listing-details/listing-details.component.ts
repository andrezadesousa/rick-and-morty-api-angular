import { Component } from '@angular/core';
import { RickService } from '../../services/rick.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css'],
})
export class ListingDetailsComponent {
  constructor(public rickService: RickService, private route: ActivatedRoute) {}

  personagem!: {
    name: string;
    type: string;
    species: string;
    status: string;
    gender: string;
    origin: { name: string };
    location: { name: string };
    created: string;
    image: string;
  };

  async ngOnInit(): Promise<void> {
    const resultado = await this.rickService.carregarPersonagem(
      Number(this.route.snapshot.paramMap.get('id'))
    );

    this.personagem = resultado;

    // console.log(resultado.image);
    // console.log(this.route.snapshot.paramMap.get('id'));
  }
}
