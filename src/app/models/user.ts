export class User {    
    public constructor(
        public id: number = 0,
        public fullName: string = '',
        public username: string = '',
        public password: string = '',
        public email: string = null,
        public birthDate: string = null
    ) { }     
}