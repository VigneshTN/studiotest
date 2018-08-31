import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonHelper } from '../helper/common-helper';
import { DeviceType } from '../enums/device-type';
import { Observable, Subject } from 'rxjs';
import { User } from '../../user/interface/user.interface';
import { SearchConstants } from './search.constants';


@Component({
    selector: 'app-user-search',
    templateUrl: '../search/search.component.html',
    styleUrls: ['../search/search.component.less']
})

export class AppUserSearchComponent implements OnInit, OnDestroy {
    private showSearchBox: boolean = false;
    private placeholderText: string = '';
    private searchTerms = new Subject<string>();

    users$: Observable<User[]>;

    constructor(private _commonHelper: CommonHelper) {
    }

    ngOnInit(): void {
        if (this._commonHelper.getDeviceType() === DeviceType.NONE_DESKTOP) {
            this.placeholderText = SearchConstants.Search;
        }
        this.initSearch();
    }

    /**
     * Init search subject
     * @returns void
     * @memberof AppUserSearchComponent
     */
    initSearch(): void {
        // this.users$ = this.searchTerms.pipe({

        // });
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
        this.searchTerms.next(term);
    }

    ngOnDestroy(): void {
    }
}
