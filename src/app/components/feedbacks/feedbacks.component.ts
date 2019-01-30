import { Component, OnInit } from '@angular/core';
import { LocalModalService } from '../../services/local-modal.service';
import { FeedbacksService } from '../../services/feedbacks.service';
import { CurrentUser } from '../../models/currentUser';
import { Feedback } from '../../models/feedback';
import { AuthService } from '../../services/auth.service';


@Component({
    selector: 'app-feedbacks',
    templateUrl: './feedbacks.component.html',
    styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

    public currentUser: CurrentUser;
    public feedbackObj: Feedback = new Feedback();

    constructor (
        private feedbacksService: FeedbacksService, 
        private localModalService: LocalModalService, 
        private authService: AuthService   
    ) { }

    ngOnInit() {
        if (this.authService.isLoggedIn) {
            this.currentUser = this.authService.getLoggedInUserData();
            this.feedbackObj.userId = this.currentUser.userId;
            this.feedbackObj.username = this.currentUser.username;
        } 
        else {
            this.localModalService.open('red', 'Error', 'This page is only for registered users. Please register or sign in.', 'login');
        }
    }

    public addFeedback(): void {
        this.feedbacksService.addFeedback(this.feedbackObj).subscribe(
            () => {
                this.localModalService.open('rgb(102, 255, 51)', 'Feedbacks', 'Feedback was sent successfully!', 'all-feedbacks');
            }, err => {
                this.localModalService.open('red', "Error", err.message);
                console.error(err);
            }
        )
    }


}
