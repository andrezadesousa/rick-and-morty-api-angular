import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';
import { ListingComponent } from './components/listing/listing.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RickService } from './services/rick.service';
import { SigninComponent } from './components/signin/signin.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    UserCardComponent,
    DetailsComponent,
    SigninComponent,
    ListingDetailsComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [RickService],
  bootstrap: [AppComponent],
})
export class AppModule {}
