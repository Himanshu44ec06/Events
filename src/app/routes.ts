import  { Routes}  from  '@angular/router'

import { EventListComponent } from './events/event-list/eventList.component';
import { EventDetailComponent } from './events/event-detail/eventDetail.component';
import { CreateEventComponent } from './events/create-event/createEvent.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-detail/event-route-activator.service';

export  const  appRoutes: Routes  = [
    { path : 'events',  component :  EventListComponent},
    {path:'events/new',component:CreateEventComponent},
    { path : 'events/:id',  component :  EventDetailComponent,canActivate: [EventRouteActivator]},
    { path : '404', component :  Error404Component },
    { path : '', redirectTo:'/events' , pathMatch: 'full'},
    { path  : 'user', loadChildren : './user/user.module#UserModule'}


];