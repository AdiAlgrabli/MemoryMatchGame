import { Component, OnInit, Input } from '@angular/core';
import { StopwatchPipe } from '../../pipes/stopwatch.pipe';
import { Stopwatch } from '../../models/stopwatch';

@Component({
    selector: 'app-stopwatch',
    templateUrl: './stopwatch.component.html',
    styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

    public swObj: Stopwatch = new Stopwatch();
    public interval: any;
    

    constructor() { }

    ngOnInit() {
    }

    public reset(): void {
        this.swObj.hours = 0;
        this.swObj.minutes = 0;
        this.swObj.seconds = 0;
        this.interval = clearInterval(this.interval);
    }

    public updateTime(): void {

        this.swObj.seconds += 1;

        if (this.swObj.seconds > 59) {
            this.swObj.seconds = 0;
            this.swObj.minutes += 1;
        }

        if (this.swObj.minutes > 59) {
            this.swObj.minutes = 0;
            this.swObj.hours += 1;
        }
    }

    public start(): void {
        this.interval = setInterval(() => {
            this.updateTime();
        }, 1000);
    }

    public stop(): void {
        this.swObj.hours = 0;
        this.swObj.minutes = 0;
        this.swObj.seconds = 0;
        this.interval = clearInterval(this.interval);
    }

    ngOnDestroy() {
        this.interval = clearInterval(this.interval);
    }
}
