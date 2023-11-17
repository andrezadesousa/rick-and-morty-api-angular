import { Component } from '@angular/core';
import { RickService } from '../services/rick.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent {
  constructor(public rickService: RickService){}
}
