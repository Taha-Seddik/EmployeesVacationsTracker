import axios, { AxiosResponse } from 'axios';
import { CreateOrUpdateEmployeeRequest, IEmployee } from '../models/entities/employee';

// const baseUrl = process.env.BASE_URL;
const apiUrl = `/api/employees`;

// returns them sorted by creation date DESC
export const fetchEmployeesForAdmin = (): Promise<AxiosResponse<{ employees: IEmployee[] }>> => {
  const url = `${apiUrl}`;
  const config = {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  return axios.get(url, config);
};

// returns employee id
export const createEmployee = (data: CreateOrUpdateEmployeeRequest): Promise<AxiosResponse<number>> => {
  const url = `${apiUrl}`;
  const config = {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  return axios.post(url, data, config);
};

export const deleteEmployee = (employeeId: number): Promise<AxiosResponse<void>> => {
  const url = `${apiUrl}/${employeeId}`;
  const config = {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  return axios.delete(url, config);
};
