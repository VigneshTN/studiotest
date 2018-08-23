import { NgModule } from "@angular/core";
import { SharedModuleConstants } from "./share-module.constants";


@NgModule({
    imports: [],
    declarations: SharedModuleConstants.MODULE_COMPONENTS,
    exports: SharedModuleConstants.MODULE_COMPONENTS
})

export class SharedModule {}