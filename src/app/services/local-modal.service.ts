import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
    providedIn: 'root'
})
export class LocalModalService {

    public modalRef: NgbModalRef;

    constructor (
        private modalService: NgbModal,
    ) { }

    
    public open(backgroundColor: string, header: string, modalContent: string, route?: string): void {
        let options: NgbModalOptions = {
            keyboard: false,
            backdrop: 'static'
        };

        const modalRef = this.modalService.open(ModalComponent, options);
        modalRef.componentInstance.backgroundColor = backgroundColor;
        modalRef.componentInstance.header = header;
        modalRef.componentInstance.modalContent = modalContent;
        modalRef.componentInstance.routeDes = route;       
    }
}
