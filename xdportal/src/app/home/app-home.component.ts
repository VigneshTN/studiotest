import { Component, OnInit, OnDestroy, HostBinding, Input } from '@angular/core';
import { UserService } from '../user/service/user.service';
import { User } from '../user/interface/user.interface';
import { Subscription } from 'rxjs';
import { AppHomeComponentConstants } from './app-home.constants';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
    selector: 'app-home',
    templateUrl: './app-home.component.html',
    styleUrls: ['./app-home.component.less']
})

export class AppHomeComponent implements OnInit, OnDestroy {
    users: User[];
    homeComponentSubscription: Subscription;
    public slides = [
        'First slide',
        'Second slide',
        'Third slide',
        'Fourth slide',
        'Fifth slide',
        'Sixth slide'
    ];
    public config: SwiperConfigInterface = {
        direction: 'horizontal',
        observer: true,
        slidesPerView: 3,
        navigation: true,
        initialSlide: 0,
        loop: true,
        breakpoints: {
            1200: {
                slidesPerView: 3,
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


    constructor(private _userService: UserService) {

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
