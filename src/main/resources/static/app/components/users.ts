import {Component, OnInit} from '@angular/core';

import {User} from '../domains/user';
import {UserService} from "../services/users";
import {Router} from "@angular/router";
@Component({
    selector: 'users',
    template: `
        <h1>{{title}}</h1>
        <h2 *ngIf="selectedUser">Hello: {{selectedUser.firstName}} {{selectedUser.lastName}}</h2>
        <h3 *ngIf="selectedUser">Login: {{selectedUser.login}} Id {{selectedUser.id}} </h3>
        <user-details    [user]="selectedUser" ></user-details>
        <div>
            <ul class="users">
                <li *ngFor="let u of users"
                [class.selected]="u===user"
                (click) = "select(u)"> 
                    <span class="badge">{{u.id}}</span> {{u.firstName}}
                </li>
            </ul>
            <div *ngIf="selectedUser">
              <h2>
                {{selectedUser.login | uppercase}} is my user
              </h2>
                <button (click)="gotoDetail()">View Details</button>
            </div>
        </div>
        `,
    styles: [`
      .selected {background-color: #CFD8DC !important;color: white;}
      .users {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .users li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .users li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .users li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .users .text {
        position: relative;
        top: -3px;
      }
      .users .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }`]
})
export class UsersComponent implements OnInit {
    users: User[];
    selectedUser: User;

    constructor(private router: Router, private userService: UserService) {
    };

    getUsers(): void {
        this.userService.getUsers().then(users => this.users = users);
    }

    ngOnInit(): void {
        this.getUsers();
    }

    gotoDetails(): void {
        this.router.navigate(['/detail', this.selectedUser.id])
    }

    select(u: User): void {
        this.selectedUser = u;
    }
}
