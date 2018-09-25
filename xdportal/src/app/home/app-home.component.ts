import { Component, OnInit, OnDestroy, HostBinding, Input } from '@angular/core';
import { UserService } from '../user/service/user.service';
import { User } from '../user/interface/user.interface';
import { Subscription } from 'rxjs';
import { AppHomeComponentConstants } from './app-home.constants';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NoImageConfig } from '../shared/interface/no-image.interface';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './app-home.component.html',
    styleUrls: ['./app-home.component.less']
})

export class AppHomeComponent implements OnInit, OnDestroy {
    users: User[];
    homeComponentSubscription: Subscription;
    config: SwiperConfigInterface = {
        direction: 'horizontal',
        observer: true,
        slidesPerView: 3,
        navigation: true,
        initialSlide: 0,
        loop: true,
        autoplay: {
            delay: 1500,
        },
        breakpoints: {
            1200: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            930: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    };
    imgConfig: NoImageConfig = {
        containerHeight: 250,
        containerWidth: 250,
        textFontSize: 100,
        textLineHeight: 250,
        letterSpacing: 10,
        containerBottom: 0,
        parentContainerPadding: 10
    };

    constructor(private _userService: UserService,
        private fb: FormBuilder) {

    }

    ngOnInit() {
        this.getUsers();
    }

    /**
     * Get Users
     * @returns void
     * @memberof AppHomeComponent
     */
    getUsers(): void {
        this.homeComponentSubscription = this._userService.getUseres().subscribe(data => {
            this.users = data;
        });
    }

    ngOnDestroy() {
        // un subscribe all Observable(s) for avoiding memory leak
        this.homeComponentSubscription.unsubscribe();
    }
}
