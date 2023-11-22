import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { EventBookingsComponentComponent } from './event-bookings-component/event-bookings-component.component';
import { EventListComponentComponent } from './event-list-component/event-list-component.component';
import { MyBookingsComponentComponent } from './my-bookings-component/my-bookings-component.component';
import { NewEventComponent } from './new-event/new-event.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventBookingsComponentComponent,
    EventListComponentComponent,
    MyBookingsComponentComponent,
    NewEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
