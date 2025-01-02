import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adjustment-request',
  imports: [FormsModule, CommonModule],
  templateUrl: './adjustment-request.component.html',
  styleUrls: ['./adjustment-request.component.css'],
})
export class AdjustmentRequestComponent {
  reason = '';
  requestedChange = '';
  errorMessage = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    if (!this.reason || !this.requestedChange) {
      this.errorMessage = 'Both fields are required!';
    } else {
      this.errorMessage = '';
      

      const newAdjustment = {
        id: new Date().getTime(), 
        employeeName: 'Employee',
        date: new Date().toISOString().split('T')[0], 
        originalCheckIn: '09:00', 
        originalCheckOut: '18:00', 
        requestedChange: this.requestedChange,
        reason: this.reason,
      };

      const storedAdjustments = JSON.parse(localStorage.getItem('adjustments') || '[]');
      storedAdjustments.push(newAdjustment);

      localStorage.setItem('adjustments', JSON.stringify(storedAdjustments));

      this.reason = '';
      this.requestedChange = '';

      this.router.navigate(['/employee/attendance']);
    }
  }
}
