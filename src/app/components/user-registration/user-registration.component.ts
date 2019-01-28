import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';
import { LocalModalService } from '../../services/local-modal.service';

@Component({
    selector: 'app-user-registration',
    templateUrl: './user-registration.component.html',
    styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

    public datePickerConfig: Partial<BsDatepickerConfig>;
    public currentDate: Date = new Date();
    public user: User = new User();
    public date?: Date;

    constructor(private usersService: UsersService, private localModalService: LocalModalService) {
        this.datePickerConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue',
            showWeekNumbers: false,
            minDate: new Date(1900, 0, 1),
            maxDate: this.currentDate,
            dateInputFormat: 'DD/MM/YYYY'
        });
    }

    ngOnInit() {
    }

    public addUser(): void {
        if (this.date != null) {
            this.changeDate();
        }

        this.usersService.addUser(this.user).subscribe(
            () => {
                setTimeout(() => {
                    this.localModalService.open('rgb(102, 255, 51)', "Registration", 'Registration completed successfully!', 'home');
                }, 1000);
            },
            err => {
                this.localModalService.open('red', 'Error', err.message);
                console.error(err.error);
            }
        )
    }

    // Convert the date timezone to local
    public changeDate(): void {
        this.user.birthDate = this.date.toLocaleDateString();
    }
}



