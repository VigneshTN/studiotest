import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { CommonHelper } from '../helper/common-helper';
import { DeviceType } from '../enums/device-type';
import { Subscription } from 'rxjs';
import { User } from '../../user/interface/user.interface';
import { SearchConstants } from './search.constants';
import { UserService } from '../../user/service/user.service';
import { SearchTypes } from '../enums/search-types';
import { Router } from '@angular/router';
import { NoImageConfig } from '../interface/no-image.interface';


@Component({
    selector: 'app-user-search',
    templateUrl: '../search/search.component.html',
    styleUrls: ['../search/search.component.less']
})

export class AppUserSearchComponent implements OnInit, OnDestroy {
    searchSubscriptions: Subscription;
    placeholderText: string = '';
    showSearchBox: boolean = false;
    hideSearchSuggestion: boolean = false;
    users: User[] = [];
    searchText: string = '';
    searchType: any =  SearchTypes;
    imgConfig: NoImageConfig = {
        containerHeight: 30,
        containerWidth: 30,
        textFontSize: 10,
        textLineHeight: 30,
        letterSpacing: 2,
        containerBottom: 0,
        parentContainerPadding: 0
    };

    constructor(private _commonHelper: CommonHelper
        , private _userService: UserService
        , private _router: Router) {
    }

    ngOnInit(): void {
        if (this._commonHelper.getDeviceType() === DeviceType.NONE_DESKTOP) {
            this.placeholderText = SearchConstants.Search;
        }
        this.getUsers();
    }

    /**
     * show search input box
     * @returns void
     * @memberof AppUserSearchComponent
     */
    showSearch(searchValue): void {
        if (this._commonHelper.getDeviceType() === DeviceType.DESKTOP_DEVICE) {
            if (!searchValue) {
                this.showSearchBox = !this.showSearchBox;
                this.placeholderText = this.placeholderText ? '' : SearchConstants.Search;
            } else {
                this.searchUser(searchValue, this.searchType);
            }
        }
    }

    /**
     * Update Search suggestions
     * @return void
     * @memberof AppUserSearchComponent
     */
    updateSearchSuggestion(): void {
        if (this.searchText) {
            this.hideSearchSuggestion = false;
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
            if (document.getElementsByClassName('search-result--show').length > 0) {
                this.hideSearchSuggestion = true;
            } else {
                this.showSearchBox = $event;
                this.placeholderText = '';
            }
            this.searchText = '';
        }
    }

    /**
     * clear search input value
     * @param {any} event
     * @returns void
     * @memberof AppUserSearchComponent
     */
    clearSearch(event): void {
        event.stopPropagation();
        this.placeholderText = SearchConstants.Search;
        this.searchText = '';
    }

    /**
     * Get User
     * @returns void
     * @memberof AppUserSearchComponent
     */
    getUsers() {
        this._userService.getUseres().subscribe((response) => {
          this.users = response;
        });
    }

    /**
     * Search User
     * @param {string} term
     * @param {string} [type]
     * @returns void
     * @memberof AppUserSearchComponent
     */
    searchUser(term: string, type?: string): void {
        console.log(term);
    }

    /**
     * Navigate to User detail
     * @param {User} user
     * @returns void
     * @memberof AppUserSearchComponent
     */
    navigateToDetail(user: User): void {
        this._router.navigate(['members/' + user.id + '/employee']);
    }

    /**
     * on Destroy of component
     * unsubscribe subscription events.
     */
    ngOnDestroy(): void {
        this.searchSubscriptions.unsubscribe();
    }
}
