import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

export class ModalContent { }

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    @Input()
    public backgroundColor: string = 'white';

    @Input()
    public header: string = "I'm a header substitute";

    @Input() 
    public modalContent: string = "I'm a message substitute";

    @Input()
    public routeDes: string = '';

    constructor (
        public activeModal: NgbActiveModal, 
        private router: Router
    ) { }

    public close(): void {
        this.activeModal.close();

        // option to route to new url once closing the modal
        if (this.routeDes != undefined){
            setTimeout(() => {
                this.router.navigate(["/" + this.routeDes]);
            }, 2000);
        }          
    }
}