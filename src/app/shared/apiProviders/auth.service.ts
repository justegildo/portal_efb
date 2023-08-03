import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataProvider } from './data-providers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth = new Subject<boolean>();

    constructor(private _data: DataProvider) {}

    set authenticated(value: boolean) {
        this._data.authenticated = value;
        this.auth.next(value);
    }
}
