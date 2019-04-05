import { Component, Input }  from  '@angular/core'
import { IEvent } from '../shared/models/event.model';

@Component({
   selector : 'event-thumbnail',
   templateUrl  : './eventThumbnail.component.html'
})

export  class   EventThumbnailComponent {
 
    @Input() event : IEvent;


}