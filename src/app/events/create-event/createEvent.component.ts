import {Component}  from '@angular/core'
import { Router } from '@angular/router';
import { IEvent } from '../shared/models/event.model';
import { EventService } from '../shared/events.service';

@Component({
    templateUrl  : './createEvent.component.html',
    styles:[`
    em  {float:right; color : #E05C65; padding-left:10px;} 
    `]
})

export class CreateEventComponent {

    newEvent :  IEvent;
    constructor(private router:Router,private eventService: EventService){}

    saveEvent(formValues) : void  {
        this.eventService.addNewEvent(formValues);
        this.router.navigate(['events']);

    }
    cancel() :void {
        this.router.navigate(['/events'])
    }
}