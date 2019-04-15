
import { Component }   from  '@angular/core'
import { AuthService } from '../user/shared/auth.service';
import { EventService } from '../events/shared/events.service';
import { ISession } from '../events/shared/models/event.model';

@Component({
    selector :  'nav-bar',
    templateUrl  : './navbar.component.html'
})

export class  NavBarComponent {

    searchString:string = "";
    foundSessions: ISession[];
    constructor(private authService: AuthService,
         private  eventService: EventService
        ){}

    searchSession(searchString) : void {

            this.eventService.searchSessions(searchString).subscribe((sessions=>{
                   this.foundSessions = sessions;
                   console.log(sessions);
            }));

    }

}