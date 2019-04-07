import { Component, Input } from "@angular/core";
import { ISession } from '../shared/models/event.model';

@Component({
    selector : 'session-list',
    templateUrl : './sessionList.component.html'
})

export  class  SessionListComponent  {

    @Input() sessions: ISession[];
}