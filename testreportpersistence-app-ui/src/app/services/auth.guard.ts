import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (private authService: AuthService) {

  }

  public canActivate(): any {

    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.authService.login();
    }

  }

}
