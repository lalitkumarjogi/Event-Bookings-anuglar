import { Component } from '@angular/core';
import { EventService } from './event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   loggeduser:boolean=false
   loggeduserdata:any
  constructor(private http:EventService,private router:Router){
     const localdata=localStorage.getItem('Event')
         if(localdata !=null){
            this.loggeduser=true
            this.loggeduserdata=JSON.parse(localdata)

         }
  }
  CreateUser=
  {
    "UserId": 0,
    "Name": "",
    "Email": "",
    "Password": "",
    "ContactNo": "",
    "Role": ""
  }
  loginuser=
  {
    "Password": "",
    "ContactNo": ""
  }
createperson(){
   this.http.cgreatuser(this.CreateUser).subscribe((res:any)=>{
    if(res.result){
       alert("user creation done")
       this.closeregister()
    }else{
       alert(res.message)
    }
   })
}

loginperson(){
   this.http.loginuser(this.loginuser).subscribe((res:any)=>{
      if(res.result){
         alert("user Login Success")
         localStorage.setItem("Event",JSON.stringify(res.data))
         this.loggeduser=true
         this.loggeduserdata=res.data
           this.closelogin()
      }
      else{
         alert(res.message)
      }
   })
}

logout(){
    localStorage.removeItem('Event')
    alert("User Logout ")
     this.router.navigate(['Home'])
    this.loggeduser =false
    this.loggeduserdata=undefined
}






  login(){
    const login=document.getElementById('login')
     if(login !=null){
        login.style.display="block"
     }
 }
 onRegiste() {
   const model = document.getElementById('register');
   if(model != null) {
     model.style.display = 'block';
   }
 }

 closelogin(){
   const login=document.getElementById('login')
   if(login !=null){
      login.style.display="none"
   }
 }

 closeregister(){
   const login=document.getElementById('register')
   if(login !=null){
      login.style.display="none"
   }
 }


}
