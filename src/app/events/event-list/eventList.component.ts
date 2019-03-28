import { Component, OnInit}  from  '@angular/core'
import { EventService } from '../shared/events.service';

@Component({
    templateUrl : './eventList.component.html'
})

export class  EventListComponent implements  OnInit {
     
    events;
     constructor (private eventService: EventService){}
      
     ngOnInit(){
        this.events   = this.eventService.getEvents();
     }
 
}