import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../models/feedback';
import { FeedbacksService } from '../../services/feedbacks.service';
import { LocalModalService } from '../../services/local-modal.service';
import { CurrentUser } from '../../models/currentUser';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-all-feedbacks',
    templateUrl: './all-feedbacks.component.html',
    styleUrls: ['./all-feedbacks.component.css']
})
export class AllFeedbacksComponent implements OnInit {
   
    public currentUser: CurrentUser;
    public enableAddFbButton: boolean = false;
    public feedbacks: Feedback[];

    constructor(
        private authService: AuthService,
        private feedbacksService: FeedbacksService, 
        private localModalService: LocalModalService,
        private router: Router
    ) { }

    ngOnInit() {

        if (this.authService.isLoggedIn) {
            this.enableAddFbButton = true;
        }
        
        this.feedbacksService.getAllFeedbacks().subscribe(
            (feedbacks: Feedback[]) => {
                this.feedbacks = feedbacks;
            },
            err => {
                this.localModalService.open('red', "Error", err.message);
                console.error(err);
            }
        )
    }

    public goTo(): void {
        this.router.navigate(['/feedbacks']);
    }
}
