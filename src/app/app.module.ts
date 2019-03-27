import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import  { NavBarComponent }  from  './nav/navbar.component';
import  {   EventListComponent}   from  './events/event-list/eventList.component'
import  {  EventThumbnailComponent  }  from  './events/event-thumbnail/eventThumbnail.component' 

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
