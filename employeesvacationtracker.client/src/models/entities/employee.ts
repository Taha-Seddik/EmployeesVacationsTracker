export interface IEmployee {
  id: number; // identifier
  jobTitle: string;
  departement: keyof typeof Departments;
  role: string;
  joiningDate: string;
  userId: string;
}

export enum Departments {
  Development,
  Design,
  Testing,
  HR,
}

export interface CreateOrUpdateEmployeeFormData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  jobTitle: string;
  department: Departments;
  joiningDate: Date;
}

export interface CreateOrUpdateEmployeeRequest {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  jobTitle: string;
  department: Departments;
  joiningDate: string;
}
