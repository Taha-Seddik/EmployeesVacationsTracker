import axios, { AxiosResponse } from 'axios';
import { IEmployee } from '../models/entities/employee';

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
