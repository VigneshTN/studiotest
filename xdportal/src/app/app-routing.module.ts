import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppHomeComponent } from './home/app-home.component';


const appModuleRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: AppHomeComponent
    },
    {
        path: 'members', loadChildren: './user/user.module#UserModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appModuleRoutes, { preloadingStrategy: PreloadAllModules })]
})
export class AppRoutingModule { }
