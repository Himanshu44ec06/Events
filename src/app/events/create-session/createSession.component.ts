import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { ISession } from '../shared/models/event.model';

@Component({
    selector  : 'create-session',
    templateUrl : './createSession.component.html'
})
export class  CreateSessionComponent  implements  OnInit {

    @Output() saveNewSession  = new EventEmitter();
    @Output() cancelNewSession  = new EventEmitter();

    newSessionForm :  FormGroup;
    name : FormControl;
    presenter : FormControl;
    duration: FormControl;
    level : FormControl;
    abstract : FormControl;


    ngOnInit(){
        this.name  = new FormControl('',Validators.required);
        this.presenter  = new FormControl('',Validators.required);
        this.duration = new  FormControl('',Validators.required);
        this.level  = new FormControl('',Validators.required);
        this.abstract = new FormControl('',[Validators.required,Validators.maxLength(400)]);
        
        this.newSessionForm = new FormGroup({
            name  : this.name,
            presenter :  this.presenter,
            duration : this.duration,
            level : this.level,
            abstract : this.abstract
        })
    }

    saveSession(formValue):void  {
        let session  :  ISession = {
            id : undefined,
            name :  formValue.name,
            presenter :  formValue.presenter,
            duration :  +formValue.duration,
            level :  formValue.level,
            abstract :  formValue.abstract,
            voters : []
        }
        this.saveNewSession.emit(session);
    }

    cancel() : void {
        this.cancelNewSession.emit();
    }
} 