
import { SharedModuleConstants } from './share-module.constants';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonHelper } from './helper/common-helper';
import { XHRBackend, RequestOptions, Http } from '@angular/http';
import { HttpInterceptor } from 'src/app/shared/utils/http-interceptor';

export function httpServiceFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
    return new HttpInterceptor(backend, defaultOptions);
}

@NgModule({
    imports: [SharedModuleConstants.MODULE_IMPORTS],
    declarations: SharedModuleConstants.MODULE_COMPONENTS,
    providers: [CommonHelper,
        {
        provide: Http,
        useFactory: httpServiceFactory,
        deps: [XHRBackend, RequestOptions]
      }
    ],
    exports: SharedModuleConstants.MODULE_COMPONENTS
})

export class SharedModule { }
