///<reference path="../../node_modules/@types/core-js/index.d.ts"/>
///<reference path="../../node_modules/rxjs/add/operator/toPromise.d.ts"/>
import {Injectable} from '@angular/core';
import {User} from "../domains/user";
import 'rxjs/add/operator/toPromise';
import {USERS} from "./mock-users";
import {Http} from "@angular/http";

@Injectable()
export class UserService {
    private url = 'users/';
    constructor(private http : Http){}

    getUsers(): Promise<User[]> {

        return this.http.get(this.url)
            .toPromise()
            .then(response=>{
                console.log(response.json());
                return response.json() as User[];
            })
            .catch(this.handleError);

    }
    private  handleError(error: any): Promise<any>{
        console.error('Error occured',error);
        return Promise.reject(error.message || error);
    }
    getUser(id: number) : Promise<User>{
        return this.getUsers().then(users=> users.find(user=>user.id===id));
    }
}