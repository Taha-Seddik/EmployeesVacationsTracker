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

export interface CreateOrUpdateFormData {
  jobTitle: string;
  departement: string;
  role: string;
  joiningDate: Date;
}

export interface CreateOrUpdateEmployeeRequest {
  jobTitle: string;
  departement: string;
  role: string;
  joiningDate: string;
}
