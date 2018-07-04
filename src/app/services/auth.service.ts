import { IUser } from './../interfaces/IUser';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

    private _user: BehaviorSubject<IUser> = new BehaviorSubject<IUser>({});

    get user() {
        return this._user.asObservable();
    }
    constructor() {
        const user: IUser = {
            username: localStorage.getItem('username'),
            password: localStorage.getItem('password')
        };
        this._user.next(user);
    }

    login(username: string, password: string) {
        if (!username || !password) {
            return;
        }
        const user = {
            username: username,
            password: password
        };
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        this._user.next(user);
    }
}


