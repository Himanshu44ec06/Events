
import { Component }   from  '@angular/core'
import { AuthService } from '../user/shared/auth.service';

@Component({
    selector :  'nav-bar',
    templateUrl  : './navbar.component.html'
})

export class  NavBarComponent {

    constructor(private authService: AuthService){}

}