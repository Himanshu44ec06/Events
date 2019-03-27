import { Component, Input }  from  '@angular/core'

@Component({
   selector : 'event-thumbnail',
   templateUrl  : './eventThumbnail.component.html'
})

export  class   EventThumbnailComponent {
 
    @Input() event;


}