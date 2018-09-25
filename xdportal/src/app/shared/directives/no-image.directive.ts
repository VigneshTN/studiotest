import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AppConstants } from '../constants/app-constants';
import { NoImageConfig } from '../interface/no-image.interface';



// tslint:disable-next-line:directive-selector
@Directive({ selector: '[imgSrc]' })
export class ImgSrcDirective implements OnInit {
    @Input() imgSrc: string;
    @Input() imgConfig: NoImageConfig;
    @Input() imgText: string;
    elem: ElementRef;
    possibleBgColors = ['#c72f3dde', '#6a737c', '#33485d', '#335d51', '#1b672fdb',
                '#3a5a26db', '#61320ae0', '#583e37e0', '#473758f7', '#583745f5',
                '#180d46f5', '#485167', '#944743', '#00A591', '#D2691E'
    ];

    constructor(el: ElementRef, private renderer: Renderer2) {
        this.elem = el;
    }

    ngOnInit() {
        if (environment.baseAssetsUrl) {
            const imagePath = environment.baseAssetsUrl + '/' + AppConstants.imagePath +
                    '/' + this.imgSrc;
            if (imagePath && this.imgSrc) {
                this.elem.nativeElement.src = imagePath;
            } else {
                // this.elem.nativeElement.src = environment.baseAssetsUrl
                //     + '/' + AppConstants.imagePath + '/' + AppConstants.noImage;
                const colorPick = Math.floor(Math.random() * this.possibleBgColors.length);
                // this.renderer.addClass(this.elem, 'hidden-image');
                this.elem.nativeElement.style.display = 'none';
                this.elem.nativeElement.parentElement.style.padding = this.imgConfig.parentContainerPadding + 'px';
                 const outerChild = document.createElement('div');
                 outerChild.style.cssText = 'position:relative;left:50%;transform:translateX(-50%);'
                    + ';width:' + this.imgConfig.containerWidth
                    + 'px;bottom:' + this.imgConfig.containerBottom
                    + 'px;height:' + this.imgConfig.containerHeight + 'px;border-radius:'
                    + this.imgConfig.containerWidth + 'px;background-color:' + this.possibleBgColors[colorPick];
                 const innerChild = document.createElement('div');
                 innerChild.style.cssText = 'width:100%;text-align:center;color:white;line-height:' +
                        this.imgConfig.textLineHeight + 'px;font-size:' + this.imgConfig.textFontSize + 'px;'
                        + this.imgConfig.letterSpacing + 'px';
                 outerChild.appendChild(innerChild);
                 let initials = this.imgText ? this.imgText.split(',') : 'NA';
                 initials = initials.length > 1 ?
                    (initials[0].trim().charAt(0) + '' + initials[1].trim().charAt(0))
                        : initials[0].trim().charAt(0);
                innerChild.innerHTML = initials;
                 this.renderer.appendChild(this.elem.nativeElement.parentElement, outerChild);
            }
        }
    }
}
