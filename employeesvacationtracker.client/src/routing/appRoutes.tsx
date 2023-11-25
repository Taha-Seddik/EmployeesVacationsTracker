import { Navigate, createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error';
import AdminHomePage from '../pages/adminHomePage';
import SignInPage from '../pages/auth/signInPage';
import { RoutesMap } from './RoutesMap';
import EmployeesPage from '../pages/employees/employeesPage';
import EmployeeEditionPage from '../pages/employees/employeeEditionPage';
import VacationsPage from '../pages/vacations/vacationsPage';
import VacationEditionPage from '../pages/vacations/vacationEditionPage';

export const appRouter = createBrowserRouter([
  {
    path: RoutesMap.signIn.path,
    element: <SignInPage />,
    // lazy: () => import("./projects"),
  },
  {
    path: RoutesMap.home.path,
    element: <AdminHomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: RoutesMap.employees.path,
    element: <EmployeesPage />,
    // lazy: () => import("./projects"),
  },
  {
    path: RoutesMap.createEmployee.path,
    element: <EmployeeEditionPage />,
    // lazy: () => import("./projects"),
  },
  {
    path: RoutesMap.editEmployee.path,
    element: <EmployeeEditionPage />,
    // lazy: () => import("./projects"),
  },
  {
    path: RoutesMap.vacations.path,
    element: <VacationsPage />,
    // lazy: () => import("./projects"),
  },
  {
    path: RoutesMap.createVacation.path,
    element: <VacationEditionPage />,
    // lazy: () => import("./projects"),
  },
  {
    path: RoutesMap.editVacation.path,
    element: <VacationEditionPage />,
    // lazy: () => import("./projects"),
  },
  {
    path: '*',
    element: <Navigate to={RoutesMap.signIn.path} />,
    index: true,
    // lazy: () => import("./projects"),
  },
]);
