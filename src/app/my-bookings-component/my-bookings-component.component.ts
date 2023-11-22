import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-my-bookings-component',
  templateUrl: './my-bookings-component.component.html',
  styleUrls: ['./my-bookings-component.component.css']
})
export class MyBookingsComponentComponent  implements OnInit{
  bookings:any[]=[]
   constructor(private http:EventService){
  
   }
   ngOnInit(): void {
    const localdata=localStorage.getItem('Event')
    if(localdata !=null){
       const user=JSON.parse(localdata)
        this.getbybooking(user.userId)

    }
   }
   getbybooking(userId:any){
     this.http.getbookingcaustomer(userId).subscribe((res:any)=>{
         this.bookings=res.data

     })
   }

}
