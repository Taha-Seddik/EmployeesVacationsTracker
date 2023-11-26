import axios, { AxiosResponse } from 'axios';
import { IEmployee } from '../models/employee';
import { makeAuthHeader } from './authHeader.service';

const baseUrl = process.env.BASE_URL;
const apiUrl = `${baseUrl}/api/admin/employees`;

// returns them sorted by creation date DESC
export const fetchEmployeesForAdmin = (): Promise<AxiosResponse<IEmployee[]>> => {
  const url = `${apiUrl}/getAll`;
  const authHeader = makeAuthHeader();
  const config = {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      ...authHeader,
    },
  };
  return axios.get(url, config);
};
