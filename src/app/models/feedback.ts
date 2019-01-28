export class Feedback {
    public constructor (
        public id: number = 0,
        public userId: number = 0,
        public username: string = '',
        public dateAdded: string = '',
        public fbText: string = ''
    ){}   
}