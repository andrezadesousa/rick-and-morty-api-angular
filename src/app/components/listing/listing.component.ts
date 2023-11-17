import { Component } from '@angular/core';
import { RickService } from '../services/rick.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  constructor(public rickService: RickService){}
}
