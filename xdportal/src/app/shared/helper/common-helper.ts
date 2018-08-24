import { Injectable } from '@angular/core';


@Injectable()
export class CommonHelper {
    isLargeDevice: string;
    constructor() {}

    /**
     * set device type
     * @param {string} value
     */
    setDeviceType(value: string): void {
        this.isLargeDevice = value;
    }

    /**
     * get device type
     * @param {string} value
     * @return {string} isLargeDevice
     */
    getDeviceType(): string {
        return this.isLargeDevice;
    }

}
