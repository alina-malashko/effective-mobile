import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppPath } from '../enums/routing-path-enum';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isUserAuthorized()) {
    return true;
  }
  router.navigate([AppPath.LogInFullPath]);
  return false;
};
