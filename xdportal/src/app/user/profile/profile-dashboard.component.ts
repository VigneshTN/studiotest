import {
    Component,
    OnDestroy,
    OnInit,
    AfterViewInit,
} from '@angular/core';
import { UserService } from '../service/user.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { User } from '../interface/user.interface';
import { Subscription } from 'rxjs';
import { ProfileDashBoardConstants } from './profile-dashboard.constants';
import { NoImageConfig } from '../../shared/interface/no-image.interface';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

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
    imgConfig: NoImageConfig = {
        containerHeight: 200,
        containerWidth: 200,
        textFontSize: 50,
        textLineHeight: 200,
        letterSpacing: 10,
        containerBottom: 0,
        parentContainerPadding: 0
    };
    modalRef: BsModalRef;
    config = {
        backdrop: true,
        ignoreBackdropClick: false,
        class: 'modal-lg'
    };

    constructor(private _activatedRoute: ActivatedRoute,
        private _userService: UserService,
        private _router: Router,
        private modalService: BsModalService) { }

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

    openSeatingModal(seatingTemplate) {
        this.modalRef = this.modalService.show(seatingTemplate,  this.config);
        const el = document.querySelectorAll('[data-t-seat="403"]');
        if (el) {
            el[0].classList.add('draw');
        }
    }

    ngAfterViewInit(): void {
    }
}
