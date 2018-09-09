import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user/service/user.service';
import { User } from '../user/interface/user.interface';
import { Subscription } from 'rxjs';
import { AppHomeComponentConstants } from './app-home.constants';

@Component({
    selector: 'app-home',
    templateUrl: './app-home.component.html',
    styleUrls: ['./app-home.component.less']
})

export class AppHomeComponent implements OnInit, OnDestroy {
    users: User[];
    homeComponentSubscription: Subscription;
    
    constructor(private _userService: UserService) {

    }

    ngOnInit() {
        $('.owl-carousel').owlCarousel();
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
