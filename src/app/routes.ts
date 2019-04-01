import  { Routes}  from  '@angular/router'

import { EventListComponent } from './events/event-list/eventList.component';
import { EventDetailComponent } from './events/event-detail/eventDetail.component';
import { CreateEventComponent } from './events/create-event/createEvent.component';

export  const  appRoutes: Routes  = [
    { path : 'events',  component :  EventListComponent},
    {path:'events/new',component:CreateEventComponent},
    { path : 'events/:id',  component :  EventDetailComponent},
    
    { path : '', redirectTo:'/events' , pathMatch: 'full'},


];