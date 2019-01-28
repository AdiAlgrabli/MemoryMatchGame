import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameResult } from '../models/gameResult';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
    providedIn: 'root'
})

export class GameResultsService {
    private gameResUrl: string = "http://localhost:50399/api/game-results";

    constructor (
        private httpClient: HttpClient,
        private errorHandlerService: ErrorHandlerService
    ) { }

    public addGameResult(gameResult: GameResult): Observable<GameResult> {
        return this.httpClient.post<GameResult>(this.gameResUrl, gameResult)
            .pipe(catchError(this.errorHandlerService.handleError));
    }

    public getAllGameResults(): Observable<GameResult[]> {
        return this.httpClient.get<GameResult[]>(this.gameResUrl)
            .pipe(catchError(this.errorHandlerService.handleError));
    }
}
