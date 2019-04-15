import { Directive, OnInit, ElementRef, Input } from "@angular/core";

declare var $: any;
@Directive({
    selector : '[modal-trigger]'
})

export class  ModalTriggerDirective implements OnInit {


    private el: HTMLElement;
    @Input('modal-trigger') modalId : string;

    constructor(private elRef: ElementRef){

        this.el =  elRef.nativeElement;
    }

    ngOnInit(){
        this.el.addEventListener('click',e=>{
            $('#' + this.modalId).modal({});
        });
    }
}