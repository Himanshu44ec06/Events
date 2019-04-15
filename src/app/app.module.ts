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
import { AuthService } from './user/shared/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/create-session/createSession.component';
import { SessionListComponent } from './events/session-list/sessionList.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsibleWell.component';
import  { JQ_Token }   from  './common/jquery.service';
import { SimpleModalComponent } from './common/simple-modal/simpleModal.component';
import { ModalTriggerDirective } from './common/modalTrigger.directive';
import { UpVoteComponent } from './events/up-vote/upvote.component';

let  jQuery = window['$']

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpVoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivator,
    AuthService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
