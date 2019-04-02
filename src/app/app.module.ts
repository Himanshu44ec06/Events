import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import  { NavBarComponent }  from  './nav/navbar.component';
import  {   EventListComponent}   from  './events/event-list/eventList.component'
import  {  EventThumbnailComponent  }  from  './events/event-thumbnail/eventThumbnail.component' 
import  { EventDetailComponent } from  './events/event-detail/eventDetail.component'
import  { CreateEventComponent } from  './events/create-event/createEvent.component'
import  { EventService}   from  './events/shared/events.service'
import  { EventRouteActivator }  from './events/event-detail/event-route-activator.service'

import  { Error404Component }  from  './errors/404.component';

import  { appRoutes} from './routes'
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
