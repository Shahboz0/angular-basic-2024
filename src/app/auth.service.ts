import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuth = false

  login(): void {
    this._isAuth = true
  }

  logout(): void {
    this._isAuth = false
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this._isAuth)
      }, 1000)
    })
  }
}
