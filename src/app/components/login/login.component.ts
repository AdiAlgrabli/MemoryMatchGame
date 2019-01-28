import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { LocalModalService } from '../../services/local-modal.service';
import { Login } from '../../models/login';
import { AuthService } from '../../services/auth.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public loginUserData: Login = new Login();
    
    constructor (
        private loginService: LoginService, 
        private localModalService: LocalModalService,
        private authService: AuthService
    ) { }

    public login(): void {
        this.loginService.login(this.loginUserData.id, this.loginUserData.username, this.loginUserData.password).subscribe(
            (loginUserData: Login) => {
                localStorage.setItem('currentUser', JSON.stringify(loginUserData));
                this.authService.setLoggedIn(true);
                setTimeout(() => {
                    this.localModalService.open('rgb(102, 255, 51)', 'Login', "You're logged in!", 'home');
                }, 1000);
            },
            err => {
                this.localModalService.open('red', 'Error', err.message);
                console.error(err.error);
            }
        )
    }
}
