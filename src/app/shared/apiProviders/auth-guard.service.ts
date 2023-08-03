import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  Token() {
    const Token = localStorage.getItem('token');
    return Token;
  }


  constructor(private _router: Router, private _authService: AuthService) {
  }

  canActivate(): boolean {
    if (!this.Token()) {
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }

}
