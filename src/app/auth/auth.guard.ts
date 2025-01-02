import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: any): boolean {
    const role = this.authService.getRole();
    const expectedRole = route.data.role;
    if (!this.authService.isAuthenticated() || role !== expectedRole) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
