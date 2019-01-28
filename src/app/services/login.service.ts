import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
import { Login } from '../models/login';


@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private loginUrl: string = "http://localhost:50399/api/login";

    constructor (
        private httpClient: HttpClient,
        private errorHandlerService: ErrorHandlerService
    ) { }

    public login(id: number, username: string, password: string): Observable<Login> {
        return this.httpClient.post<Login>(this.loginUrl, { id, username, password })
            .pipe(catchError(this.errorHandlerService.handleError));
    }
}
