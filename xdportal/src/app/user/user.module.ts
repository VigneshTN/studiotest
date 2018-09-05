import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserRoutingModuleConstants } from './user-routing-module.constants';


@NgModule({
    imports: UserRoutingModuleConstants.MODULE_IMPORTS,
    declarations: UserRoutingModuleConstants.MODULE_COMPONENTS,
    exports :  UserRoutingModuleConstants.MODULE_COMPONENTS
})

export class UserModule {}
