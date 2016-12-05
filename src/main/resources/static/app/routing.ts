import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {UsersComponent} from "./components/users";
import {DashboardComponent} from "./components/dashboard";
import {UserDetailsComponent} from "./components/user-details";
const appRoutes: Routes = [
    {
        path:'users',
        component: UsersComponent
    },{
        path:'dashboard',
        component: DashboardComponent
    },{
        path:'',
        redirectTo:'dashboard',
        pathMatch: 'full'
    },{
        path:'detail/:id',
        component:UserDetailsComponent

    }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
