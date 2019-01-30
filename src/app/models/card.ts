export class Card {
    public constructor (
        public id: number = 0,
        public width: number = 0,
        public height: number = 0,
        public frontImageSource: string = '',
        public frontImageName: string = '',
        public backImageSource: string = '',
        public backImageName: string = '',
        public notExists: boolean = false,
    ){}
}
