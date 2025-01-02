export interface Attendance {
    id: number;
    date: string;
    checkIn: string;
    checkOut: string;
    status: string;
    employeeId: number;
    adjustmentRequested?: boolean;
    adjustmentDetails?: string;
}