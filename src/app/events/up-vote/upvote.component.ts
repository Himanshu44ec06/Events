import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
    selector:'upvote',
    templateUrl  : './upvote.component.html',
    styleUrls:['/app/events/up-vote/upvote.component.css']
    
})

export  class UpVoteComponent {
   @Input() count : number;
   @Input() voted : boolean;
   @Output() vote  = new EventEmitter();


   constructor(){}
}