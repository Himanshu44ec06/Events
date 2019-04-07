import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl : './profile.component.html',
  styles : [`
    em  {float:right; color : #E05C65; padding-left:10px;} 
    .error input { background-color:##E3C3E5 }
    .error ::-webkit-input-placeholder { color:#999} 
  `]
})
export class ProfileComponent implements OnInit {
    
      profileForm:  FormGroup;
      firstName :  FormControl;
      lastName : FormControl;
     constructor(private  route: Router,
       private  authService: AuthService
      ){}

      ngOnInit() {

        if(!this.authService.isAuthenticated()) 
           this.route.navigate(['/user/login'])

       this.firstName  = new FormControl(this.authService.currentUser.firstName,Validators.required);
        this.lastName = new FormControl(this.authService.currentUser.lastName,Validators.required);
         this.profileForm = new FormGroup({
             firstName : this.firstName,
             lastName : this.lastName
         })
      }

      saveProfile(formValues):void {
        if(this.profileForm.valid) {
          this.authService.updateCurrentUser(formValues.firstName,formValues.lastName);
          this.route.navigate(['events'])
        }
      }

     cancel() : void  {
        this.route.navigate(['/events'])
     }
}