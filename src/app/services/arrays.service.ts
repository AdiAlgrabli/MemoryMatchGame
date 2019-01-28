import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ArraysService {

    // Function for rand numbers in a range (including edges)
    public rand(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public countNumberOfCertainElementInArray(arr: number[], num: number): number {
        let counter: number = 0;

        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === num) {
                    counter++;
                }
            }
            return counter;
        }
        return null;
        
    }

    // This function creates array with the length of arrLength, between min-max numbers
    public getDoubledRandArr(arrLength: number, min: number, max: number): number[] {
        let randArr: number[] = [];
        let num: number;

        while (randArr.length < arrLength) {
            num = this.rand(min, max);
            
            if (this.countNumberOfCertainElementInArray(randArr, num) == null) {
                randArr.push(num);
            }
            else if (this.countNumberOfCertainElementInArray(randArr, num) <= 1) {
                randArr.push(num);
            }
        }

        return randArr;
    }
}
