import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './components/listing/listing.component';
import { DetailsComponent } from './components/details/details.component';
import { SigninComponent } from './components/signin/signin.component';
import { RickService } from './components/services/rick.service';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';

const routes: Routes = [
  { path: 'listing', component: ListingComponent },
  { path: 'details', component: DetailsComponent},
  { path: 'listing-details', component: ListingDetailsComponent},
  { path: 'rickServices', component: RickService},
  // { path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
