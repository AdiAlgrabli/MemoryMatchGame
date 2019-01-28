import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from '../../models/currentUser';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public currentUser: CurrentUser;
    public enablePlayButton: boolean = false;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
        if (this.authService.isLoggedIn) {
            this.enablePlayButton = true;
        }       
    }

    public goTo(): void {
        this.router.navigate(['/game']);
    }
}
