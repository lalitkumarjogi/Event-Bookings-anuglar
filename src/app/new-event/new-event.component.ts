import { Component } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent {
  loggeduserdata:any

  constructor(private http:EventService){
    const localdata=localStorage.getItem('Event')
    if(localdata !=null){
       this.loggeduserdata=JSON.parse(localdata)
     this.eventObj.OrganizerId=this.loggeduserdata.userId
    }
  }
  eventObj:any=
  {
    "EventId": 0,
    "EventName": "",
    "Description": "",
    "Location": "",
    "StartDate": "",
    "StartTime": "",
    "EndDate": "",
    "EndTime": "",
    "ImageUrl": "",
    "Capacity": "",
    "Price": 0,
    "OrganizerId": 0,
    "IsIdentityMandatory": true,
    "IsCoupleEntryMandatory": true
  }
  onCreateEvent(){
  this.http.CreateEvent(this.eventObj).subscribe((res:any)=>{
      if(res.result){
         alert("Event Create Success")
         this.eventObj = {
          "EventId": 0,
          "EventName": "",
          "Description": "",
          "Location": "",
          "StartDate": "",
          "StartTime": "",
          "EndDate": "",
          "EndTime": "",
          "ImageUrl": "",
          "Capacity": "",
          "Price": 0,
          "OrganizerId": 0,
          "IsIdentityMandatory": true,
          "IsCoupleEntryMandatory": true
        };
      }else{
         alert(res.data)
      }
  })
  }
}
