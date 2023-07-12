import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppPath } from '../enums/routing-path-enum';
import { ICredentials } from '../interfaces/credentials.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public logIn(data: ICredentials): void {
    localStorage.setItem('credentials', JSON.stringify(data));
    this.router.navigate([AppPath.MainFullPath]);
  }

  public isUserAuthorized(): boolean {
    const credentials = localStorage.getItem('credentials');
    if (credentials) return true;
    return false;
  }

  public logOut(): void {
    localStorage.removeItem('credentials');
    this.router.navigate([AppPath.LogInFullPath]);
  }
}
