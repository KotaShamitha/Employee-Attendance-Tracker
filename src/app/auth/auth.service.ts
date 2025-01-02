import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private role: 'HR Admin' | 'Employee' | null = null;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    if(username === 'admin' && password === 'admin') {
      this.isLoggedIn = true;
      this.role = 'HR Admin';
      localStorage.setItem('session', JSON.stringify({role: this.role}));
      return true;
    } else if (username === 'employee' && password === 'employee') {
      this.isLoggedIn = true;
      this.role = 'Employee';
      localStorage.setItem('session', JSON.stringify({role: this.role}));
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.role = null;
    localStorage.removeItem('session');
    this.router.navigate(['/login']);
  }

  getRole(): 'HR Admin' | 'Employee' | null {
    const session = localStorage.getItem('session');
    return session ? JSON.parse(session).role : null;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn || !!localStorage.getItem('session');
  }
}
