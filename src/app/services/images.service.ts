import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { ArraysService } from './arrays.service';
import { Card } from '../models/card';
import { ErrorHandlerService } from './error-handler.service';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ImagesService {

    private gameUrl: string = "http://localhost:50399/api/game";
    private fullPathToImg: string = "/assets/images/";

    constructor (
        private httpClient: HttpClient,
        private arraysService: ArraysService,
        private errorHandlerService: ErrorHandlerService
    ) { }

    public getAllImages(): Observable<Image[]> {
        return this.httpClient.get<Image[]>(this.gameUrl)
            .pipe(catchError(this.errorHandlerService.handleError));
    }

    public getImageTypes(imagesArr: Image[]): string[] {
        let types: string[] = [];

        for (let i = 0; i < imagesArr.length; i++) {
            if (!types.includes(imagesArr[i].imageType)) {
                types.push(imagesArr[i].imageType);
            }
        }
        return types;
    }

    public renameImage(name: string): string {
        return (this.fullPathToImg + name);
    }

    public addPathToImages(imagesArr: Image[]): Image[] {
        for (let i = 0; i < imagesArr.length; i++) {
            imagesArr[i].imageName = this.renameImage(imagesArr[i].imageName);
        }
        return imagesArr;
    }

    public getImgNamesArrayByImgType(imagesArr: Image[], imgType: string): string[] {
        let imageNames: string[] = [];

        for (let i = 0; i < imagesArr.length; i++) {
            if (imagesArr[i].imageType === imgType) {
                imageNames.push(imagesArr[i].imageName);
            }
        }
        return imageNames;
    }

    public setBackgroundImage(backgroundImgNames: string[]): string {
        let randImgIdx: number = 0;

        // In case there is more than one background image - pick a random one, otherwise - take the only one there is
        if (backgroundImgNames.length > 1) {
            randImgIdx = this.arraysService.rand(0, backgroundImgNames.length - 1);
            return backgroundImgNames[randImgIdx];
        }
        else {
            return backgroundImgNames[0];
        }
    }

    public blendImageArray(imagesNames: string[], randArr: number[]): string[] {
        let blendedImageNames: string[] = [];

        for (let i = 0; i < randArr.length; i++) {
            blendedImageNames.push(imagesNames[randArr[i]]);
        }
        return blendedImageNames;
    }
}
