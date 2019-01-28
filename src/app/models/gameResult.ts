export class GameResult {
    public constructor (
        public id: number = 0,
        public userId: number = 0,
        public username: string = '',
        public fullName: string = '',
        public dateAdded: string = '',
        public timeSpan: string = '',
        public steps: number = 0
    ){}
}