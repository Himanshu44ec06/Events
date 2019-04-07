import { Component, Input } from "@angular/core";

@Component({
    selector: 'collapsible-well',
    template: `
      <div (click)="toogleContent()" class="well pointable">
         <h4 class="well-title">  {{title}}</h4>
         <h4>
            <ng-content select="[well-title]"></ng-content>
         </h4>

         <ng-content *ngIf="visible" select="[well-body]" ></ng-content>
      </div>
    `
})
export class CollapsibleWellComponent {

    @Input() title : string;
    visible:boolean;


    toogleContent():void{
       this.visible = !this.visible;
    }

}