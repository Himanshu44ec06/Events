import  { NgModule }  from  '@angular/core'
import { CommonModule  }  from  '@angular/common'
import  { RouterModule }  from  '@angular/router'
import  { FormsModule,ReactiveFormsModule }  from  '@angular/forms'

import  { UserRoutes}   from  './routes';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
 
      imports : [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          
          RouterModule.forChild(UserRoutes)
      ],
      declarations : [ 
 
        LoginComponent,
        ProfileComponent

      ],
      exports : [],
      providers : []

})

export class  UserModule {}