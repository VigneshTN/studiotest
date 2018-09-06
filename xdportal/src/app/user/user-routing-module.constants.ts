import { ProfileDashboardCompnent } from './profile/profile-dashboard.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { UserRoutingModule } from './user-routing.module';
import {CommonModule} from '@angular/common';

export class UserRoutingModuleConstants {
    static MODULE_COMPONENTS = [
        ProfileDashboardCompnent
    ];
    static MODULE_IMPORTS = [
        CommonModule,
        UserRoutingModule,
        ProgressbarModule.forRoot()
    ];
}
