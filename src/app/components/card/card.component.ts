import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/card';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {

    public isFlipped: boolean = false;
    private _twoCardsWereFlipped: boolean;

    get twoCardsWereFlipped(): boolean {
        return this._twoCardsWereFlipped;
    }

    @Input()
    set twoCardsWereFlipped(twoCardsWereFlipped: boolean) {
        this._twoCardsWereFlipped = twoCardsWereFlipped;
    }

    @Input()
    public card: Card;

    @Output()
    public clickedImage: EventEmitter<CardComponent> = new EventEmitter();

    public flipCard(): void {
        if (!this.isFlipped) {
            this.isFlipped = true;
        }
    }

    // Will let the parent component know which card that was clicked
    public cardWasClicked(): void {
        if (!this.isFlipped) {
            this.clickedImage.emit(this);
        }
    }
}




