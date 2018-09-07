import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDashboardCompnent } from './profile/profile-dashboard.component';

const userModuleRoutes: Routes = [
    { path: ':id/employee', component: ProfileDashboardCompnent}
];

@NgModule({
    imports: [RouterModule.forChild(userModuleRoutes)],
    exports: [RouterModule]
})

export class UserRoutingModule {}
