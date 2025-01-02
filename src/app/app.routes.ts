import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AttendanceListComponent } from './components/employee/attendance-list/attendance-list.component';
import { AdjustmentRequestComponent } from './components/employee/adjustment-request/adjustment-request.component';
import { ApproveAdjustmentsComponent } from './components/admin/approve-adjustments/approve-adjustments.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'employee/attendance',
    component: AttendanceListComponent,
    canActivate: [AuthGuard],
    data: { role: 'Employee' },
  },
  {
    path: 'employee/adjustment-request',
    component: AdjustmentRequestComponent,
    canActivate: [AuthGuard],
    data: { role: 'Employee' },
  },
  {
    path: 'admin/approve-adjustments',
    component: ApproveAdjustmentsComponent,
    canActivate: [AuthGuard],
    data: { role: 'HR Admin' },
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
