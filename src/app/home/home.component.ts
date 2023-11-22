import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggeduserdata: any;
   constructor(private http:EventService){
    const localdata=localStorage.getItem('Event')
    if(localdata !=null){
      const user=JSON.parse(localdata)
      this.bookingObj.UserId=user.UserId

    }
   }
   ngOnInit(): void {
     this.loadallEvent()
   }
   bookingObj: any = {
    "BookingId": 0,
    "UserId": 0,
    "EventId": 0,
    "NoOfTickets": 0,
    "EventBookingMembers": [
      
    ]
  };
   eventMemebrs: any =  {
    "BookingMemberId": 0,
    "BookingId": 0,
    "Name": "",
    "Age": 0,
    "IdentityCard": "",
    "CardNo": "",
    "ContactNo": ""
  };
events:any
   loadallEvent(){
      this.http.GetAllEvents().subscribe((res:any)=>{
            this.events=res.data

      })
   }
   booknow(event:any){
    this.bookingObj.EventId=event.eventId
    const book=document.getElementById('bookModel')
     if(book !=null){
       book.style.display='block'
     }

   }
   close(){
    const book=document.getElementById('bookModel')
     if(book !=null){
       book.style.display='none'
     }
   }
   addmember(){
    const obj=JSON.stringify(this.eventMemebrs)
    this.eventMemebrs=
    {
      "BookingMemberId": 0,
      "BookingId": 0,
      "Name": "",
      "Age": 0,
      "IdentityCard": "",
      "CardNo": "",
      "ContactNo": ""
    };

      this.bookingObj.EventBookingMembers.push(JSON.parse(obj))
   }
   makebookin(){
    this.bookingObj.NoOfTickets=this.bookingObj.EventBookingMembers.length
      this.http.bookevent(this.bookingObj).subscribe((res:any)=>{
              if(res.result){
                alert("Successfully Booked")
                this.close()

              }else{
                 alert(res.message)
              }
      })
   }
}
