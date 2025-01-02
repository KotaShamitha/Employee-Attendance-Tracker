import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance-list',
  imports: [CommonModule],
  templateUrl: './attendance-list.component.html',
  styleUrl: './attendance-list.component.css'
})
export class AttendanceListComponent {
  attendanceRecords = [
    { date: '2025-01-01', checkIn: '09:00', checkOut: '18:00', status: 'Present'},
    { date: '2025-01-02', checkIn: '09:10', checkOut: '18:00', status: 'Late'},
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedRecords = localStorage.getItem('attendanceRecords');
    if (storedRecords) {
      this.attendanceRecords = JSON.parse(storedRecords);
    }
  }

  onRequestAdjustment(): void {
    this.router.navigate(['/employee/adjustment-request']);
  }
}
