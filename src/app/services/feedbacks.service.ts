import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
    providedIn: 'root'
})

export class FeedbacksService {

    private addFeedbackUrl: string = "http://localhost:50399/api/feedbacks";
    private allFeedbacksUrl: string = "http://localhost:50399/api/all-feedbacks";

    constructor (
        private httpClient: HttpClient,
        private errorHandlerService: ErrorHandlerService
    ) { }

    public addFeedback(feedback: Feedback): Observable<Feedback> {
        return this.httpClient.post<Feedback>(this.addFeedbackUrl, feedback)
            .pipe(catchError(this.errorHandlerService.handleError));
    }

    public getAllFeedbacks(): Observable<Feedback[]> {
        return this.httpClient.get<Feedback[]>(this.allFeedbacksUrl)
            .pipe(catchError(this.errorHandlerService.handleError));
    }
}
