import { Component } from '@angular/core';
import { RickService } from 'src/app/services/rick.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(public rickService: RickService) {}
  pesquisa: string = '';

  search() {
    if (this.pesquisa === '') {
      // this.rickService.filteredList = this.rickService.avatars;
    }

    this.rickService.filterList(this.pesquisa);
  }
}

