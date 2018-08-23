
import { SharedModuleConstants } from './share-module.constants';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
    imports: [RouterModule, BsDropdownModule.forRoot(), CollapseModule.forRoot()],
    declarations: SharedModuleConstants.MODULE_COMPONENTS,
    exports: SharedModuleConstants.MODULE_COMPONENTS
})

export class SharedModule {}
