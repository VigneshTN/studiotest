import { AppUserSearchComponent } from './search/search.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppHomeComponent } from '../home/app-home.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import { RouterModule } from '@angular/router';


export class SharedModuleConstants {
    static MODULE_IMPORTS = [
        RouterModule,
        Ng2DeviceDetectorModule.forRoot(),
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot()
    ];
    static MODULE_COMPONENTS = [
        AppHeaderComponent,
        AppFooterComponent,
        AppLayoutComponent,
        AppUserSearchComponent,
        AppHomeComponent,
        ClickOutsideDirective,
    ];
}
