import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyBookingsComponentComponent } from './my-bookings-component/my-bookings-component.component';
import { EventListComponentComponent } from './event-list-component/event-list-component.component';
import { NewEventComponent } from './new-event/new-event.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'Home',
    pathMatch:'full'
  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path: 'my-bookings',
    component: MyBookingsComponentComponent
  },
  {
    path:'new-Event',
    component:NewEventComponent
  },
  {
    path:'Event-List',
    component:EventListComponentComponent
  },
  {
    path:'event-bookings',
    component: MyBookingsComponentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
