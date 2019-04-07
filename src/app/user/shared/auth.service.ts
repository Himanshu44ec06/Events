import { Injectable } from "@angular/core";
import { IUser } from './models/IUser';

@Injectable()
export  class  AuthService{

        currentUser: IUser;

        loginUser(username:string,password:string) : void {
            this.currentUser  = {
                id : 1,
                userName : username,
                firstName :  username,
                lastName : ''
            }
        }

        updateCurrentUser(firstName:string,lastName:string) : void  {
            this.currentUser.firstName =  firstName;
            this.currentUser.lastName =  lastName;
        }
      
        isAuthenticated() : boolean {
              return  !! this.currentUser;
        }

}