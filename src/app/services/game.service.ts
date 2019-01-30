import { Injectable } from '@angular/core';
import { ImagesService } from './images.service';
import { ArraysService } from './arrays.service';
import { Image } from '../models/image';
import { Card } from '../models/card';
import { CurrentUser } from '../models/currentUser';
import { GameResult } from '../models/gameResult';
import { Game } from '../models/game';
import { StopwatchComponent } from '../components/stopwatch/stopwatch.component';
import { GameResultsService } from './game-results.service';
import { LocalModalService } from './local-modal.service';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    public currentUser: CurrentUser;
    public gameResObj: GameResult = new GameResult();
    public imageTypes: string[] = [];
    public game: Game;

    constructor (
        private imagesService: ImagesService,
        private arraysService: ArraysService,
        private gameResultsService: GameResultsService,
        private localModalService: LocalModalService,
        private authService: AuthService
    ) { }

    public checkIfLoggedIn(): void {
        if (this.authService.isLoggedIn) {
            this.currentUser = this.authService.getLoggedInUserData();
            this.gameResObj.userId = this.currentUser.userId;
            this.gameResObj.username = this.currentUser.username;
        }
        else {
            this.localModalService.open('red', 'Error', 'This page is only for registered users. Please register or sign in.', 'login');
        }
    }

    public setBackground(): string {
        let backgroundImagesSrcArr: string[];
        let backgroundImage: string;

        // Fill backgroundImagesSrcArr with background images only                 
        backgroundImagesSrcArr = this.imagesService.getImgNamesArrayByImgType(this.game.images, this.imageTypes[2]);

        // Set the background image (setBackgroundImage picks background image randomly):
        backgroundImage = this.imagesService.setBackgroundImage(backgroundImagesSrcArr);

        return backgroundImage;
    }

    public play(): void {
        this.imagesService.getAllImages().subscribe(
            (images: Image[]) => {
                this.game.images = images;

                if (this.game.images != undefined) {

                    // Get image unique types
                    this.imageTypes = this.imagesService.getImageTypes(this.game.images);

                    // Add local path to image names
                    this.game.images = this.imagesService.addPathToImages(this.game.images);

                    // Prepare the cards
                    this.game.cards = this.prepareCards();

                    // Set background image
                    this.game.backgroundImageSource = this.setBackground();

                }
            });
    }

    public getGame(game: Game): void {
        this.game = game;
    }

    public prepareCards(): Card[] {
        let cardsArr: Card[] = [];
        let cardImagesSrc: string[] = [];
        let randArr: number[] = [];
        let backCardImage: string[];

        // Size of each card
        const width: number = 850 * 0.2;
        const height: number = 600 * 0.25;

        // Set backCard image
        backCardImage = this.imagesService.getImgNamesArrayByImgType(this.game.images, this.imageTypes[1]);

        // Fill the cardImageSrc array with frontCard images only (imageTypes[0] == card)
        cardImagesSrc = this.imagesService.getImgNamesArrayByImgType(this.game.images, this.imageTypes[0]);

        // Get rand array size 20, between 0-9. 
        randArr = this.arraysService.getDoubledRandArr((this.game.totalCards), 0, (this.game.totalCards / 2) - 1);

        // Prepare cards array
        cardsArr = this.setCards(width, height, cardImagesSrc, randArr, backCardImage);

        return cardsArr;
    }

    public setCards(width: number, height: number, cardImagesSrc: string[], randArr: number[], backCardImage: string[]): Card[] {

        let cardsArr: Card[] = [];

        for (let i = 0; i < this.game.totalCards; i++) {
            let myCard = new Card();
            myCard.id = i + 1;
            myCard.width = width;
            myCard.height = height;

            // The card's frontal image will be according to rand array's index
            [myCard.frontImageSource, myCard.frontImageName] = [cardImagesSrc[randArr[i]], cardImagesSrc[randArr[i]]];

            // Set card's back image
            [myCard.backImageSource, myCard.backImageName] = [backCardImage[0], backCardImage[0]];

            cardsArr.push(myCard);
        }
        return cardsArr;
    }

    public flipCardsBack(): void {
        setTimeout(() => {
            this.game.clickedCards[0].isFlipped = false;
            this.game.clickedCards[1].isFlipped = false;
            this.game.clickedCards = [];
            this.game.twoCardsWereFlippedParent = false;
        }, 1000);
    }

    public hideCrads(): void {
        setTimeout(() => {
            this.game.clickedCards[0].card.notExists = true;
            this.game.clickedCards[1].card.notExists = true;
            this.game.clickedCards = [];
            this.game.twoCardsWereFlippedParent = false;
        }, 1000);
    }

    public handleClick(swComp: StopwatchComponent): void {
        // In case the same card was clicked twice - it won't be pushed to clickedCards array
        if (!this.checkIfCardExistsInArr()) {
            this.game.clickedCards.push(this.game.cardComp);
            this.game.totalClicks += 1;
        }

        if (this.game.clickedCards.length === 2) {
            this.game.twoCardsWereFlippedParent = true;
            this.checkMatch();
        }

        if (this.game.totalMatches === 10) {
            this.gameOver(swComp, this.game.totalClicks);
        }
        // if (this.game.totalMatches === 10) {
        //     this.gameOver(swComp.swObj, this.game.totalClicks);
        // }

    }

    public checkMatch(): void {
        if (this.game.clickedCards[0].card.frontImageSource === this.game.clickedCards[1].card.frontImageSource) {
            this.hideCrads();
            this.game.totalMatches += 1;
        }
        else {
            this.flipCardsBack();
        }
    }

    public checkIfCardExistsInArr(): boolean {
        if (this.game.clickedCards.length > 0) {
            if (this.game.clickedCards[0].card.id === this.game.cardComp.card.id) {
                return true;
            }
            return false;
        }
        return false;
    }

    public addGameResult(gameResult: GameResult): void {
        this.gameResultsService.addGameResult(gameResult).subscribe(
            () => {
                setTimeout(() => {
                    this.localModalService.open('rgb(102, 255, 51)', 'Game Over!', 'Good job!', 'game-results');
                }, 1500);


            },
            err => {
                this.localModalService.open('red', 'Error', err.message);
                console.error(err.error);
            }
        )
    }

    public gameOver(swComp: StopwatchComponent, totalClicks: number): void {
        let gameDuration: string = swComp.swObj.hours + ":" + swComp.swObj.minutes + ":" + swComp.swObj.seconds;
        this.gameResObj.timeSpan = gameDuration;
        this.gameResObj.steps = totalClicks;
        this.addGameResult(this.gameResObj);
        swComp.reset();
    }
}

