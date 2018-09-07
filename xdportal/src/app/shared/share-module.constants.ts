import { AppUserSearchComponent } from './search/search.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppHomeComponent } from '../home/app-home.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonHelper } from './helper/common-helper';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SearchFilterPipe } from './pipe/search-filter.pipe';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

export class SharedModuleConstants {
    static MODULE_IMPORTS = [
        RouterModule,
        CommonModule,
        FormsModule,
        PerfectScrollbarModule,
        Ng2DeviceDetectorModule.forRoot(),
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot()
    ];
    static MODULE_COMPONENTS = [
        SearchFilterPipe,
        AppHeaderComponent,
        AppFooterComponent,
        AppLayoutComponent,
        AppUserSearchComponent,
        AppHomeComponent,
        ClickOutsideDirective
    ];
    static MODULE_PROVIDERS = [
      CommonHelper,
      {
        provide: PERFECT_SCROLLBAR_CONFIG,
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }
    ];
}
