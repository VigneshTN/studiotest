import { NgModule } from "@angular/core";
import { UserRoutingModuleConstants } from "../user/user-routing-module.constants"
import { FormsModule } from "@angular/forms";


@NgModule({
    imports: [FormsModule],
    declarations: UserRoutingModuleConstants.MODULE_COMPONENTS,
    exports :  UserRoutingModuleConstants.MODULE_COMPONENTS
})

export class UserModule {}