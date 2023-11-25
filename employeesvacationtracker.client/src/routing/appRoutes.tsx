import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error";
import AdminHomePage from "../pages/adminHomePage";
import SignInPage from "../pages/signInPage";

export const RoutesMap = {
  home: {
    path: `/adminHome`,
  },
  signIn: {
    path: `/signIn`,
  },
};

export const appRouter = createBrowserRouter([
  {
    path: RoutesMap.home.path,
    element: <AdminHomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: RoutesMap.signIn.path,
    element: <SignInPage />,
    // lazy: () => import("./projects"),
  },
  {
    path: "*",
    element: <Navigate to={RoutesMap.signIn.path} />,
    index: true,
    // lazy: () => import("./projects"),
  },
]);
