import  { NgModule }  from  '@angular/core'
import { CommonModule  }  from  '@angular/common'
import  { RouterModule }  from  '@angular/router'


import  { UserRoutes}   from  './routes';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
 
      imports : [
          CommonModule,
          RouterModule.forChild(UserRoutes)
      ],
      declarations : [ 
 
        ProfileComponent

      ],
      exports : [],
      providers : []

})

export class  UserModule {}