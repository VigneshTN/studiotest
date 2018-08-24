
import { SharedModuleConstants } from './share-module.constants';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonHelper } from './helper/common-helper';



@NgModule({
    imports: [SharedModuleConstants.MODULE_IMPORTS],
    declarations: SharedModuleConstants.MODULE_COMPONENTS,
    providers: [CommonHelper],
    exports: SharedModuleConstants.MODULE_COMPONENTS
})

export class SharedModule {}
