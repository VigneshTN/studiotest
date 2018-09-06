import {
    Component,
    OnDestroy,
    OnInit,
    AfterViewInit,
  } from '@angular/core';
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '@angular/router';
import {User} from '../interface/user.interface';

@Component({
    selector: 'app-profile-dashboard',
    templateUrl: '../profile/profile-dashboard.component.html',
    styleUrls: ['../profile/profile-dashboard.component.less']
})

// tslint:disable-next-line:component-class-suffix
export class ProfileDashboardCompnent implements OnInit, OnDestroy, AfterViewInit {
    userId: number = 0;
    user: boolean = false;
    constructor(private _activatedRoute: ActivatedRoute,
        private _userService: UserService) {}

    ngOnDestroy(): void {
    }
    ngOnInit(): void {
        this._activatedRoute.params.subscribe((params) => {
            this.userId = params['employeeId'];
        });
        this.getUserById();
    }


    /**
     * Get User by Employee ID
     * @return void
     * @memberof ProfileDashboardCompnent
     */
    getUserById(): void {
        setTimeout(() => {
            this.user = true;
        }, 500);
        // this._userService.getUser(this.userId).subscribe((data) => {
        //     this.user = data;
        // });
    }

    ngAfterViewInit(): void {
    }
}
