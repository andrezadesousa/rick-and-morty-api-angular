import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListingComponent } from './components/listing/listing.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { DetailsComponent } from './components/details/details.component';
import { AppUserCardComponent } from './components/app-user-card/app-user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    UserCardComponent,
    DetailsComponent,
    AppUserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
