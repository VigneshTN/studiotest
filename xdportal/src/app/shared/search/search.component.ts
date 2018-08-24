import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonHelper } from '../helper/common-helper';
import { DeviceType } from '../enums/device-type';


@Component({
    selector: 'app-user-search',
    templateUrl: '../search/search.component.html',
    styleUrls: ['../search/search.component.less']
})

export class AppUserSearchComponent implements OnInit, OnDestroy {
    showSearchBox = false;
    placeholderText = '';

    constructor(private _commonHelper: CommonHelper) {
    }

    ngOnInit(): void {
        if (this._commonHelper.getDeviceType() === DeviceType.NONE_DESKTOP) {
            this.placeholderText = 'search';
        }
    }

    /**
     * show search input box
     * @returns void
     */
    showSearch(): void {
        if (this._commonHelper.getDeviceType() === DeviceType.DESKTOP_DEVICE) {
            this.showSearchBox = !this.showSearchBox;
            this.placeholderText = this.placeholderText ? '' : 'search';
        }
    }

    /**
     * hide search input box
     * @param {any} $event
     * @returns void
     */
    hideSearch($event): void {
        if (this._commonHelper.getDeviceType() === DeviceType.DESKTOP_DEVICE) {
            this.showSearchBox = $event;
            this.placeholderText = '';
        }
    }

    ngOnDestroy(): void {
    }
}
