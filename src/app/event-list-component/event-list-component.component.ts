import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list-component',
  templateUrl: './event-list-component.component.html',
  styleUrls: ['./event-list-component.component.css']
})
export class EventListComponentComponent  implements OnInit{
  eventList:any
 constructor(private http:EventService){}

 ngOnInit(): void {
   this.http.organizerId().subscribe((res:any)=>{
    this.eventList=res.data  
   })
 }
}
