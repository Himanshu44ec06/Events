import { Component, OnInit}  from  '@angular/core'
import { EventService } from '../shared/events.service';
import { IEvent } from '../shared/models/event.model';

@Component({
    templateUrl : './eventList.component.html'
})

export class  EventListComponent implements  OnInit {
     
    events : IEvent[];
     constructor (private eventService: EventService){}
      
     ngOnInit(){
        this.events   = this.eventService.getEvents();
     }
 
}