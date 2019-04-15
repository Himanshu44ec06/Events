import  { Input, Component, ViewChild, ElementRef } from '@angular/core'
declare var $: any;
@Component({
   selector : 'simple-modal',
   templateUrl : './simpleModal.component.html'
})

export  class  SimpleModalComponent  {

    @Input() title  : string = '';
    @Input() elementId  : string = '';

    @ViewChild('modalContainer')  containerEl : ElementRef;

    constructor(){}

    closeModal() {
                $(this.containerEl.nativeElement).modal('hide');
    }

} 