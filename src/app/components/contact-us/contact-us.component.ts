import { Component, OnInit } from '@angular/core';
import { LocalModalService } from '../../services/local-modal.service';
import { PhoneNumber } from '../../models/phoneNumber';
import { ContactUsMessage } from '../../models/contactUsMessage';
import { MessagesService } from '../../services/messages.service';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css'],
})

export class ContactUsComponent implements OnInit {

    public firstPartPhoneStr: string[] = ["050", "052", "053", "054", "055", "056", "057", "058", "02", "03", "04", "08", "09"];
    public firstPartPhoneObjs: PhoneNumber[] = [];
    public phoneFirstPart: string;
    public phoneSecondPart: string;
    public contactUsMsg: ContactUsMessage = new ContactUsMessage();

    constructor(private messagesService: MessagesService, private localModalService: LocalModalService) { }

    ngOnInit() {
        // Initialize firstPartPhoneObjs array
        this.createFirstPhonePartArr();
    }

    public addMessage(): void {
        if (this.firstPartPhoneStr[this.phoneFirstPart] != undefined && this.phoneSecondPart != undefined) {
            this.contactUsMsg.phone = this.firstPartPhoneStr[this.phoneFirstPart] + this.phoneSecondPart;
        }

        this.messagesService.addMessage(this.contactUsMsg).subscribe(
            () => {
                setTimeout(() => {
                    this.localModalService.open('rgb(102, 255, 51)', "Message", 'Message was sent successfully!', 'home');
                }, 1000);
            },
            err => {
                this.localModalService.open('red', "Error", err.message);
                console.error(err);
            }
        )
    }

    public createFirstPhonePartArr(): void {
        for (let i = 0; i < this.firstPartPhoneStr.length; i++) {
            let firstPartPhoneObj: PhoneNumber = new PhoneNumber();
            firstPartPhoneObj.id = i;
            firstPartPhoneObj.phoneFirstPart = this.firstPartPhoneStr[i];
            this.firstPartPhoneObjs.push(firstPartPhoneObj);
        }
    }

}
