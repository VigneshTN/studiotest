import { ProfileDashboardCompnent } from './profile/profile-dashboard.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { UserRoutingModule } from './user-routing.module';
import {CommonModule} from '@angular/common';
import { ImgSrcDirective } from '../shared/directives/no-image.directive';
import { SharedModule } from '../shared/shared.module';

export class UserRoutingModuleConstants {
    static MODULE_COMPONENTS = [
        ProfileDashboardCompnent
    ];
    static MODULE_IMPORTS = [
        CommonModule,
        SharedModule,
        UserRoutingModule,
        ProgressbarModule.forRoot()
    ];
}
