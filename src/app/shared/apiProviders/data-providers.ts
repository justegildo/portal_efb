import {Injectable} from '@angular/core';
import {User} from '../models/user';
// import {ActorType} from '../models/actor-type';

@Injectable({
    providedIn: 'root'
})
export class DataProvider {
    private _user: User | undefined ;
    authenticated = false;
    private _token: string ;
    // actorTypes: ActorType[] = [];

    constructor() {
        this._token = '';

        addEventListener('unload', () => {
            if (this.authenticated) {
                localStorage.setItem('user', JSON.stringify(this.user));
                localStorage.setItem('token', this.token);
                localStorage.setItem('authenticated', this.authenticated + '');
            }
        });

        if (localStorage.getItem('authenticated') === 'true') {
            this.token = localStorage.getItem('token');
            this.user = User.fromJSON(localStorage.getItem('user'));

            localStorage.removeItem('authenticated');
            localStorage.removeItem('token');
            localStorage.removeItem('user');

            this.authenticated = true;
        }
    }

    set user(value: any) {
        this._user = value;
    }

    get user() {
        return this._user;
    }

    set token(value: any) {
        this._token = value;
    }

    get token() {
        return this._token;
    }
}
