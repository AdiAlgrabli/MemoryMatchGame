import { Component, OnInit, ViewChild } from '@angular/core';
import { Image } from '../../models/image';
import { CardComponent } from '../card/card.component';
import { GameService } from '../../services/game.service';
import { StopwatchComponent } from '../stopwatch/stopwatch.component'
import { CurrentUser } from '../../models/currentUser';
import { Game } from '../../models/game';

@Component({
    selector: 'app-memory-game',
    templateUrl: './memory-game.component.html',
    styleUrls: ['./memory-game.component.css']
})

export class MemoryGameComponent implements OnInit {

    public currentUser: CurrentUser;
    public images: Image[] = [];
    public backgroundImageSource: string = '';
    public totalClicks: number = 0;
    public cardComp: CardComponent;
    public totalCards: number = 20; 
    public game: Game = new Game();   


    @ViewChild(StopwatchComponent) private swComp: StopwatchComponent;
   
    constructor (
        private gameService: GameService
    ) { }

    ngOnInit() {   
        this.gameService.checkIfLoggedIn();   
        this.gameService.play();
        this.gameService.getGame(this.game);
        this.swComp.start();
    }

    public handleClick(): void {
        this.game.cardComp = this.cardComp;
        this.gameService.handleClick(this.swComp);
    }

    public playAgain(): void {
        this.gameService.play();
        this.swComp.reset();
        this.swComp.start();
    }
}