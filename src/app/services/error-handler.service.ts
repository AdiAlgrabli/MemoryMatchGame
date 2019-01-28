import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerService {

    public handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse instanceof ErrorEvent) {
            console.error('Client side error: ', errorResponse.error.message);
        }
        else {
            console.error('Server side error: ', errorResponse);
        }
        return throwError(errorResponse);
    }
}
