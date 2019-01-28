import { CardComponent } from "../components/card/card.component";
import { Card } from "./card";
import { Image } from "./image";

export class Game {
    public constructor(
        public images: Image[] = [],
        public backgroundImageSource: string = '',
        public totalCards: number = 20,
        public cardComp: CardComponent = new CardComponent(),
        public cards: Card[] = [],
        public totalClicks: number = 0,
        public clickedCards: CardComponent[] = [],
        public totalMatches: number = 0,
        public twoCardsWereFlippedParent: boolean = false
    ){}
}