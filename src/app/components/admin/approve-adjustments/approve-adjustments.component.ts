import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve-adjustments',
  imports: [CommonModule],
  templateUrl: './approve-adjustments.component.html',
  styleUrls: ['./approve-adjustments.component.css'],
})
export class ApproveAdjustmentsComponent implements OnInit {
  adjustments = [
    {
      id: 1,
      employeeName: 'John-Doe',
      date: '2025-01-02',
      originalCheckIn: '09:10',
      originalCheckOut: '18:00',
      requestedChange: 'Check-in changed to 09:00',
      reason: 'System error',
    },
    {
      id: 2,
      employeeName: 'Jane Smith',
      date: '2025-01-03',
      originalCheckIn: '08:50',
      originalCheckOut: '17:50',
      requestedChange: 'Check-out changed to 18:00',
      reason: 'Worked late',
    },
  ];

  ngOnInit(): void {
    // Fetch adjustments from localStorage (if any)
    this.adjustments = JSON.parse(localStorage.getItem('adjustments') || '[]');
  }

  updatedLocalStorage(): void {
    // Update localStorage with the updated adjustments list
    localStorage.setItem('adjustments', JSON.stringify(this.adjustments));
  }

  approvedAdjustment(adjustmentId: number): void {
    alert(`Adjustment ${adjustmentId} approved`);

    // Find the adjustment and add it to the attendance records in LocalStorage
    const approvedAdjustment = this.adjustments.find(a => a.id === adjustmentId);
    
    if (approvedAdjustment) {
      // Retrieve attendance records from LocalStorage
      let attendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords') || '[]');

      // Add the approved adjustment to attendance records
      attendanceRecords.push({
        date: approvedAdjustment.date,
        checkIn: approvedAdjustment.originalCheckIn,
        checkOut: approvedAdjustment.originalCheckOut,
        status: 'Approved Adjustment',
      });

      // Save updated records back to LocalStorage
      localStorage.setItem('attendanceRecords', JSON.stringify(attendanceRecords));

      // Remove the adjustment from the list after approval
      this.adjustments = this.adjustments.filter((a) => a.id !== adjustmentId);
      this.updatedLocalStorage(); // Save updated adjustments list to localStorage
    }
  }

  rejectAdjustment(adjustmentId: number): void {
    alert(`Adjustment ${adjustmentId} rejected`);
    this.adjustments = this.adjustments.filter((a) => a.id !== adjustmentId);
    this.updatedLocalStorage();
  }
}
