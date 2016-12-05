///<reference path="../../node_modules/@types/node/index.d.ts"/>
import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {User} from "../domains/user";
import {UserService} from "../services/users";
import {ActivatedRoute, Params} from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'user-details',
    template: `
        <div *ngIf="user">
            <label>Name: </label>
            <input [(ngModel)]="user.firstName" placeholder="name">
            <label>Last name: </label>
            <input [(ngModel)]="user.lastName" placeholder="name">
            <button (click)="goBack()">Back</button>
        </div>`,
    styles:[`
    label {
      display: inline-block;
      width: 3em;
      margin: .5em 0;
      color: #607D8B;
      font-weight: bold;
    }
    input {
      height: 2em;
      font-size: 1em;
      padding-left: .4em;
    }
    button {
      margin-top: 20px;
      font-family: Arial;
      background-color: #eee;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer; cursor: hand;
    }
    button:hover {
      background-color: #cfd8dc;
    }
    button:disabled {
      background-color: #eee;
      color: #ccc; 
      cursor: auto;
    }`]
})
export class UserDetailsComponent implements OnInit{
    constructor(private userService: UserService, private route: ActivatedRoute, private location: Location){}

    goBack(): void {
        this.location.back();
    }
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params)=>this.userService.getUser(+params['id']))
            .subscribe(user=>this.user=user);
    }
    @Input()
    user: User;


}