import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactUsMessage } from '../models/contactUsMessage';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
    providedIn: 'root'
})
export class MessagesService {

    private contactUsUrl: string = "http://localhost:50399/api/contact-us";

    constructor (
        private httpClient: HttpClient,
        private errorHandlerService: ErrorHandlerService
    ) { }

    public addMessage(message: ContactUsMessage): Observable<ContactUsMessage> {
        return this.httpClient.post<ContactUsMessage>(this.contactUsUrl, message)
            .pipe(catchError(this.errorHandlerService.handleError));
    }
}


