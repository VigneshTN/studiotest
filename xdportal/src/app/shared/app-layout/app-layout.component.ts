import { Component, OnInit } from '@angular/core';
import { Ng2DeviceService } from 'ng2-device-detector';
import { CommonHelper } from '../helper/common-helper';
import { DeviceType } from '../enums/device-type';

@Component({
    selector: 'app-layout',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.less']
})

export class AppLayoutComponent implements OnInit {
    accessDeviceInfo: any;
    constructor(private _deviceService: Ng2DeviceService,
        private _commonHelper: CommonHelper) { }
    ngOnInit() {
        this.getDeviceSpecification();
    }

    /**
     * get device type
     * @returns void
     */
    getDeviceSpecification(): void {
        this.accessDeviceInfo = this._deviceService.getDeviceInfo();
        if (this.accessDeviceInfo) {
            document.body.classList.add(this.accessDeviceInfo.browser);
            if (!this._deviceService.isDesktop()) {
                document.body.classList.add('touch');
                this._commonHelper.setDeviceType(DeviceType.NONE_DESKTOP);
            } else {
                this._commonHelper.setDeviceType(DeviceType.DESKTOP_DEVICE);
            }
        }
    }
}
