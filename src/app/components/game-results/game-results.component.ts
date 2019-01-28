import { Component, OnInit } from '@angular/core';
import { GameResult } from '../../models/gameResult';
import { GameResultsService } from '../../services/game-results.service';

@Component({
    selector: 'app-game-results',
    templateUrl: './game-results.component.html',
    styleUrls: ['./game-results.component.css']
})
export class GameResultsComponent implements OnInit {

    public gameResults: GameResult[];

    constructor(private gameResultsService: GameResultsService) { }

    ngOnInit() {
        this.gameResultsService.getAllGameResults().subscribe(
            (gameResults: GameResult[]) => {
                this.gameResults = gameResults;
            }
        )
    }
}


