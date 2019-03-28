import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import  { NavBarComponent }  from  './nav/navbar.component';
import  {   EventListComponent}   from  './events/event-list/eventList.component'
import  {  EventThumbnailComponent  }  from  './events/event-thumbnail/eventThumbnail.component' 
import  { EventDetailComponent } from  './events/event-detail/eventDetail.component'

import  { EventService}   from  './events/shared/events.service'

import  { appRoutes} from './routes'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
