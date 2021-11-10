import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card-component';
import { HomeComponent } from './home/home-component';
import { TicketComponent } from './ticket/ticket-component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, CardComponent, HomeComponent, TicketComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
