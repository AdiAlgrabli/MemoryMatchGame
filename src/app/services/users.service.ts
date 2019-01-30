import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private registrationUrl: string = "http://localhost:50399/api/registration";

    constructor (
        private httpClient: HttpClient,
        private errorHandlerService: ErrorHandlerService
    ) { }

    public addUser(user: User): Observable<User> {
        return this.httpClient.post<User>(this.registrationUrl, user)
                              .pipe(catchError(this.errorHandlerService.handleError));
    }
}

