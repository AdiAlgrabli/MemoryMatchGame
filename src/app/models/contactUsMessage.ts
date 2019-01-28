export class ContactUsMessage {
    public constructor ( 
        public id: number = 0,
        public dateAdded: string = '',
        public phone: string = null,
        public email: string = null, // has to be null for the attribute validation to work in server
        public msgContent: string = ''
    ){}
}