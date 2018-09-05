import { ProfileDashboardCompnent } from './profile/profile-dashboard.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { UserRoutingModule } from './user-routing.module';

export class UserRoutingModuleConstants {
    static MODULE_COMPONENTS = [
        ProfileDashboardCompnent
    ];
    static MODULE_IMPORTS = [
        UserRoutingModule,
        ProgressbarModule.forRoot()
    ];
}
