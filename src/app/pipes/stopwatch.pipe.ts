import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stopwatch'
})
export class StopwatchPipe implements PipeTransform {

    transform(value: string, ...args): string {
        let newSw: string = value;

        if (args[0] < 10) {
            newSw = "0" + args[0].toString() + " : ";
        }
        else {
            newSw = args[0].toString() + " : ";
        }
        if (args[1] < 10) {
            newSw += "0" + args[1].toString() + " : ";
        }
        else {
            newSw += args[1].toString() + " : ";
        }
        if (args[2] < 10) {
            newSw += "0" + args[2].toString();
        }
        else {
            newSw += args[2].toString();
        }

        return newSw;
    }
}
