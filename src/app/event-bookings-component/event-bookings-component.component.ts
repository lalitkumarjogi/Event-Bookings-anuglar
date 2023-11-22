import { Component } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-bookings-component',
  templateUrl: './event-bookings-component.component.html',
  styleUrls: ['./event-bookings-component.component.css']
})
export class EventBookingsComponentComponent {
  bookings:any[]=[]
  constructor(private http:EventService){
  const localData= localStorage.getItem('Event');
  if(localData != null) { 
   const user = JSON.parse(localData);
   this.getMyBpooking()
  }}

  getMyBpooking(){
      this.http.GetAllEvents().subscribe((res:any)=>{
        this.bookings = res.data;

      })
  }
}
