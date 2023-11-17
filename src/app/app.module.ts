import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ListingComponent } from './components/listing/listing.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { DetailsComponent } from './components/details/details.component';
import { SigninComponent } from './components/signin/signin.component';
import { RickService } from './components/services/rick.service';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    UserCardComponent,
    DetailsComponent,
    SigninComponent,
    ListingDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [RickService],
  bootstrap: [AppComponent]
})
export class AppModule { }
