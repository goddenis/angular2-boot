import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './components/app'
import {UserDetailsComponent} from "./components/user-details";
import {UserService} from "./services/users";
import {UsersComponent} from "./components/users";
import {AppRoutingModule} from "./routing";
import {DashboardComponent} from "./components/dashboard";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule],
    declarations: [AppComponent,UserDetailsComponent, UsersComponent, DashboardComponent],
    providers:[UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
