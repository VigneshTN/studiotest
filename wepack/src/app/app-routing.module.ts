import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const appModuleRoutes: Routes = [
    {
        path: "",
        redirectTo: "xdStduio",
        pathMatch: "full"
    },
    {
        path: "members", loadChildren: './user/user.module#UserModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appModuleRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }