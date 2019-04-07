import  { Component  }  from  '@angular/core'
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
    templateUrl : './login.component.html',
    styles : [`
       em  {float:right; color : #E05C65; padding-left:10px;} 
    `]
})

export class  LoginComponent {

    userName : string;
    password : string;
    constructor(
           private  route : Router,
           private  authservice: AuthService
    ){}

    Login(formLogin) : void {
          this.authservice.loginUser(formLogin.userName,formLogin.password);
          this.route.navigate(['/events'])
    }

    Cancel(): void  {
            this.route.navigate(['/events'])

    }

}