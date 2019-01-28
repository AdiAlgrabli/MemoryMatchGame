import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-background-image',
    templateUrl: './background-image.component.html',
    styleUrls: ['./background-image.component.css']
})
export class BackgroundImageComponent {

    @Input('backgroundImage')
    public backgroundImage: string;
}
