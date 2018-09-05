import {
    Component,
    OnDestroy,
    OnInit,
  } from '@angular/core';

@Component({
    selector: 'app-profile-dashboard',
    templateUrl: '../profile/profile-dashboard.component.html',
    styleUrls: ['../profile/profile-dashboard.component.less']
})

// tslint:disable-next-line:component-class-suffix
export class ProfileDashboardCompnent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
    }
    ngOnInit(): void {
    }
}
