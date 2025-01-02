export interface User {
    id: number;
    username : string;
    role: 'HR Admin' | 'Employee';
    password: string;
}