import {Component, OnInit} from "@angular/core";
import {User} from "../domains/user";
import {UserService} from "../services/users";
@Component({
    selector: 'dashboard',
    template: `<h1>Dashboard</h1>
        <div class="grid grid-pad">
            <div *ngFor="let user of users" [routerLink]="['/detail', user.id]" class="col-1-4">
                <div class="module user">
                    <h4>{{user.login}}</h4>
                </div>
            </div>
        </div>`,
    styles:[`[class*='col-'] {
      float: left;
      padding-right: 20px;
      padding-bottom: 20px;
    }
    [class*='col-']:last-of-type {
      padding-right: 0;
    }
    a {
      text-decoration: none;
    }
    *, *:after, *:before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    h3 {
      text-align: center; margin-bottom: 0;
    }
    h4 {
      position: relative;
    }
    .grid {
      margin: 0;
    }
    .col-1-4 {
      width: 25%;
    }
    .module {
      padding: 20px;
      text-align: center;
      color: #eee;
      max-height: 120px;
      min-width: 120px;
      background-color: #607D8B;
      border-radius: 2px;
    }
    .module:hover {
      background-color: #EEE;
      cursor: pointer;
      color: #607d8b;
    }
    .grid-pad {
      padding: 10px 0;
    }
    .grid-pad > [class*='col-']:last-of-type {
      padding-right: 20px;
    }
    @media (max-width: 600px) {
      .module {
        font-size: 10px;
        max-height: 75px; }
    }
    @media (max-width: 1024px) {
      .grid {
        margin: 0;
      }
      .module {
        min-width: 60px;
      }
    }
`]
})
export class DashboardComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getUsers()
            .then(users=> this.users = users.slice(1, 5));
    }


}