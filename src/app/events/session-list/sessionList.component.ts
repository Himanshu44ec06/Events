import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../shared/models/event.model';

@Component({
    selector : 'session-list',
    templateUrl : './sessionList.component.html'
})

export  class  SessionListComponent implements OnChanges  {

    @Input() sessions: ISession[];
    @Input() filterby: string;
    @Input() sortby :  string;
    visibleSessions : ISession[] = [];

    ngOnChanges() : void  {
        if(this.sessions){
            this.filterSession(this.filterby);
            this.sortby.toLowerCase() === "name" ? 
                           this.visibleSessions.sort(function(s1:ISession,s2:ISession){
                                  if(s1.name > s2.name) return 1
                                  else if(s1.name == s2.name) return  0
                                  else  return -1;
                           }) : 
                           this.visibleSessions.sort(function(s1:ISession,s2:ISession){
                                if(s1.voters.length > s2.voters.length) return 1
                                else if(s1.voters.length === s2.voters.length)  return 0
                                else return -1
                           });
        }
    }

    private filterSession(filter) :void{
           switch(filter) {
               case  'all' : 
                    this.visibleSessions = this.sessions.slice(0);
               break;
               default :
               this.visibleSessions  =  this.sessions.filter(session=>
                   {return  session.level.toLowerCase() === filter}
                );
           }
    }
}