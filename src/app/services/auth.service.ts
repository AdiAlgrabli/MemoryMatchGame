import { Injectable } from '@angular/core';
import { CurrentUser } from '../models/currentUser';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private loggedInStatus: boolean = false;

    constructor (
        private router: Router
    ) { }

    public setLoggedIn(value: boolean): void {
        this.loggedInStatus = value;
        localStorage.setItem('loggedIn', 'true');
    }

    get isLoggedIn() {
        return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
    }

    public getLoggedInUserData(): CurrentUser {
        let currentUser: CurrentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser;
    }

    public getCurrentUserName(): string {
        if (localStorage.getItem('currentUser')) {
            return JSON.parse(localStorage.getItem('currentUser')).username;
        }
        else {
            return 'Login';
        }
    }

    public logout(): void {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}
