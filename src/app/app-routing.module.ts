import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './components/listing/listing.component';
import { DetailsComponent } from './components/details/details.component';
import { SigninComponent } from './components/signin/signin.component';
import { RickService } from './components/services/rick.service';

const routes: Routes = [
  { path: 'listing', component: ListingComponent },
  { path: 'details', component: DetailsComponent},
  { path: 'rickServices', component: RickService},
  // { path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
