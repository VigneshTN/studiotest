import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonHelper } from '../helper/common-helper';
import { DeviceType } from '../enums/device-type';
import { Observable, Subject, Subscription } from 'rxjs';
import { User } from '../../user/interface/user.interface';
import { SearchConstants } from './search.constants';
import { UserService } from '../../user/service/user.service';


@Component({
    selector: 'app-user-search',
    templateUrl: '../search/search.component.html',
    styleUrls: ['../search/search.component.less']
})

export class AppUserSearchComponent implements OnInit, OnDestroy {
    private searchSubscriptions: Subscription;
    public users: User[] = [];
    public placeholderText: string = '';
    showSearchBox: boolean = false;

    constructor(private _commonHelper: CommonHelper
          , private _userService: UserService) {
    }

    ngOnInit(): void {
        if (this._commonHelper.getDeviceType() === DeviceType.NONE_DESKTOP) {
            this.placeholderText = SearchConstants.Search;
        }
        this.searchSubscriptions = this._userService.getUseres().subscribe((response) => {
            debugger;
            this.users = response;
        });
    }

    /**
     * show search input box
     * @returns void
     * @memberof AppUserSearchComponent
     */
    showSearch(): void {
        if (this._commonHelper.getDeviceType() === DeviceType.DESKTOP_DEVICE) {
            this.showSearchBox = !this.showSearchBox;
            this.placeholderText = this.placeholderText ? '' : SearchConstants.Search;
        }
    }

    /**
     * hide search input box
     * @param {any} $event
     * @returns void
     * @memberof AppUserSearchComponent
     */
    hideSearch($event): void {
        if (this._commonHelper.getDeviceType() === DeviceType.DESKTOP_DEVICE) {
            this.showSearchBox = $event;
            this.placeholderText = '';
        }
    }

    /**
     * Search User
     * @param {string} term
     * @param {string} [type]
     * @returns void
     * @memberof AppUserSearchComponent
     */
    searchUser(term: string, type?: string): void {

    }

    /**
     * on Destroy of component
     * unsubscribe subscription events.
     */
    ngOnDestroy(): void {
      this.searchSubscriptions.unsubscribe();
    }
}
