import {
  CreateOrUpdateEmployeeFormData,
  CreateOrUpdateEmployeeRequest,
  Departments,
} from '../../../models/entities/employee';

export const getDefaultFormData = (): CreateOrUpdateEmployeeFormData => {
  return {
    firstName: '',
    email: '',
    lastName: '',
    password: '',
    jobTitle: '',
    department: Departments.Development,
    joiningDate: new Date(),
  };
};

export const mapFormDataToRequestData = (data: CreateOrUpdateEmployeeFormData): CreateOrUpdateEmployeeRequest => {
  return {
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    password: data.password,
    jobTitle: data.jobTitle,
    department: data.department,
    joiningDate: data.joiningDate.toISOString(),
  };
};

export const departmentOptions = [
  { label: 'Development', id: Departments.Development },
  { label: 'Design', id: Departments.Design },
  { label: 'Testing', id: Departments.Testing },
  { label: 'HR', id: Departments.HR },
];
