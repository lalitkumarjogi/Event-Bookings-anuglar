import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  cgreatuser(user:any){
   return  this.http.post('https://freeapi.miniprojectideas.com/api/EventBooking/CreateUser',user)
  }
  loginuser(user:any){
   return  this.http.post('https://freeapi.miniprojectideas.com/api/EventBooking/Login',user)
     
  }
  CreateEvent(create:any){
   return this.http.post('https://freeapi.miniprojectideas.com/api/EventBooking/CreateEvent ',create)
  }
  organizerId(){
     return this.http.get('https://freeapi.miniprojectideas.com/api/EventBooking/GetEventsByOrganizer?organizerId=102')
  }

  GetAllEvents(){
    return  this.http.get(' https://freeapi.miniprojectideas.com/api/EventBooking/GetAllEvents')
  }
  bookevent(book:any){
     return this.http.post('https://freeapi.miniprojectideas.com/api/EventBooking/BookEvent',book)
  }
getbookingcaustomer(cust:any){
   return this.http.get('https://freeapi.miniprojectideas.com/api/EventBooking/GetBookingsByCustomer?customerId='+cust)
}


getallevent(){
   return this.http.get('https://freeapi.miniprojectideas.com/api/EventBooking/GetAllEventBooking')
}
}
