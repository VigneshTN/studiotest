import {
    Component,
    OnDestroy,
    OnInit,
    AfterViewInit,
} from '@angular/core';
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interface/user.interface';
import { Subscription } from 'rxjs';
import { ProfileDashBoardConstants } from './profile-dashboard.constants';

@Component({
    selector: 'app-profile-dashboard',
    templateUrl: '../profile/profile-dashboard.component.html',
    styleUrls: ['../profile/profile-dashboard.component.less']
})

// tslint:disable-next-line:component-class-suffix
export class ProfileDashboardCompnent implements OnInit, OnDestroy, AfterViewInit {
    userId: number = 0;
    user: User = null;
    userServiceSubscription: Subscription;
    constructor(private _activatedRoute: ActivatedRoute,
        private _userService: UserService) { }

    ngOnDestroy(): void {
    }
    ngOnInit(): void {
        this._activatedRoute.params.subscribe((params) => {
            document.getElementById(ProfileDashBoardConstants.ProfileViewLeftPaneId)
                .classList.remove(ProfileDashBoardConstants.SlideInLeft);
            document.getElementById(ProfileDashBoardConstants.ProfileViewRightPaneId)
                .classList.remove(ProfileDashBoardConstants.SlideInLeft);
            this.userId = params['id'];
            this.getUserById();
        });
    }


    /**
     * Get User by Employee ID
     * @return void
     * @memberof ProfileDashboardCompnent
     */
    getUserById(): void {
        this.userServiceSubscription = this._userService.getUser(this.userId).subscribe((data) => {
            this.user = data;
            document.getElementById(ProfileDashBoardConstants.ProfileViewLeftPaneId)
                .classList.add(ProfileDashBoardConstants.SlideInLeft);
            document.getElementById(ProfileDashBoardConstants.ProfileViewRightPaneId)
                .classList.add(ProfileDashBoardConstants.SlideInLeft);
        });
    }

    ngAfterViewInit(): void {
    }
}
