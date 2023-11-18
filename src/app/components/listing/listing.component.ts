import { Component } from '@angular/core';
import { RickService } from '../../services/rick.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent {
  constructor(public rickService: RickService, private router: Router) {}

  paginaAtual = 1;

  ngOnInit(): void {
    this.rickService.carregarAvatars();
  }

  viewInfo() {
    this.router.navigate(['/listing-details']);
  }

  loadMore() {
    const pagina = this.paginaAtual;

    this.rickService.carregarMaisPersonagens(pagina + 1);

    this.paginaAtual = pagina + 1;
  }
}