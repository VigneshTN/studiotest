import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AppConstants } from '../constants/app-constants';



// tslint:disable-next-line:directive-selector
@Directive({ selector: '[imgSrc]' })
export class ImgSrcDirective implements OnInit {
    @Input() imgSrc: string;
    elem: ElementRef;

    constructor(el: ElementRef) {
        this.elem = el;
    }

    ngOnInit() {
        if (environment.baseAssetsUrl) {
            const imagePath = environment.baseAssetsUrl + '/' + AppConstants.imagePath +
                    '/' + this.imgSrc;
            if (imagePath && this.imgSrc) {
                this.elem.nativeElement.src = imagePath;
            } else {
                this.elem.nativeElement.src = environment.baseAssetsUrl
                    + '/' + AppConstants.imagePath + '/' + AppConstants.noImage;
            }
        }
    }
}
