import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from '../../models/currentUser';
import { AuthService } from '../../services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public currentUser: CurrentUser;
    public username: string;
    public loginComp: LoginComponent;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
        if (this.authService.isLoggedIn) {
            this.currentUser = this.authService.getLoggedInUserData();
        }
    }

    public routeTo(path: string) {
        this.router.navigate(['/' + path]);
    }
}
