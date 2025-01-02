import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    if (this.authService.login(this.username, this.password)) {
      const role = this.authService.getRole();
      if (role === 'HR Admin') {
        this.router.navigate(['/admin/approve-adjustments']);
      } else if (role === 'Employee') {
        this.router.navigate(['/employee/attendance']);
      }
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}


