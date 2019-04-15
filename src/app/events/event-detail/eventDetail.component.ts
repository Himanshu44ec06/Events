import { Component, OnInit } from "@angular/core";
import { EventService } from '../shared/events.service';
import {  ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/models/event.model';

@Component({
    templateUrl  :  './eventDetail.component.html',
    styles  : [`
     .container  { padding-left: 20px;  padding-rigth :20px;}
     .event-image  { height: 100px}
    `]

})

export class  EventDetailComponent implements  OnInit {
 
    event: IEvent;
    addMode:boolean = false;
    filterBy: string = 'all';
    sortBy: string = 'name';

    
     constructor(private  eventService:  EventService, 
           private  route :  ActivatedRoute
        ){}
     ngOnInit() {
            this.route.params.forEach((param:Params)=>{
                this.event  = this.eventService.getEvent((+param['id']));       
                this.addMode =  false;
            })
          
     }

     cancelNewSession():void{
        this.addMode =  false;  
     }

     saveNewSession(session:ISession) : void  {
         
         this.event.sessions.push(session);
         this.eventService.updateEvent(this.event);
         this.addMode =  false;
     }
     addSession():void{
         this.addMode =  true;
     }
}
