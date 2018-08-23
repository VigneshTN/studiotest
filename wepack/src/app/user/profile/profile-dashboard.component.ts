import {
    Component,
    OnDestroy,
    OnInit,
  } from '@angular/core';

@Component({
    selector:'profile-dashboard',
    templateUrl: '../profile/profile-dashboard.component.html',
    styleUrls: ['../profile/profile-dashboard.component.less']
})

export class ProfileDashboardCompnent implements OnInit, OnDestroy {
    
    ngOnDestroy(): void {
        
    }
    ngOnInit(): void {
        
    }



}