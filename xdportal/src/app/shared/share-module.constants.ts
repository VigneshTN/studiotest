import { AppUserSearchComponent } from './search/search.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppHomeComponent } from '../home/app-home.component';



export class SharedModuleConstants {
    static MODULE_COMPONENTS = [
        AppHeaderComponent,
        AppFooterComponent,
        AppLayoutComponent,
        AppUserSearchComponent,
        AppHomeComponent
    ];
}
