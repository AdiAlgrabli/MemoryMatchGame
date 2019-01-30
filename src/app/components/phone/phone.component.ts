import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PhoneNumber } from '../../models/phoneNumber';

@Component({
    selector: 'app-phone',
    templateUrl: './phone.component.html',
    styleUrls: ['./phone.component.css']
})

export class PhoneComponent {

    public phoneNumbers: PhoneNumber[] = [
        { id: 0, phoneFirstPart: "050" },
        { id: 1, phoneFirstPart: "052" },
        { id: 2, phoneFirstPart: "053" },
        { id: 3, phoneFirstPart: "054" },
        { id: 4, phoneFirstPart: "055" },
        { id: 5, phoneFirstPart: "056" },
        { id: 6, phoneFirstPart: "057" },
        { id: 7, phoneFirstPart: "058" },
        { id: 8, phoneFirstPart: "02" },
        { id: 9, phoneFirstPart: "03" },
        { id: 10, phoneFirstPart: "04" },
        { id: 11, phoneFirstPart: "08" },
        { id: 12, phoneFirstPart: "09" }
    ]


    @Input('selectedValue')
    public selectedValue: number;

    @Input('phoneSecondPart')
    public phoneSecondPart: string;

    @Output()
    public firstPartChange: EventEmitter<string> = new EventEmitter();

    @Output()
    public secondPartChange: EventEmitter<string> = new EventEmitter();

    public valueChanged(): void {
        this.firstPartChange.emit(this.phoneNumbers[this.selectedValue].phoneFirstPart);
        this.secondPartChange.emit(this.phoneSecondPart);
    }

}
