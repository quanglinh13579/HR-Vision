import { ReactNode } from "react";
import Dashboard from "../feature-module/dashboard/Dashboard";
import Login from "../feature-module/login/Login";
import UnderConstruction from "../components/UnderConstruction";
import { all_routes } from "./all_routes";

export interface RouteItem {
  path: string;
  element: ReactNode;
}

export const publicRoutes: RouteItem[] = [
  {
    path: "/login",
    element: <Login />,
  },
];

export const protectedRoutes: RouteItem[] = [
  {
    path: all_routes.dashboard,
    element: <Dashboard />,
  },
  {
    path: all_routes.employeeDirectory,
    element: <UnderConstruction title="Employee Directory" />,
  },
  {
    path: all_routes.attendance,
    element: <UnderConstruction title="Attendance & Leave" />,
  },
  {
    path: all_routes.recruitment,
    element: <UnderConstruction title="Recruitment" />,
  },
  {
    path: all_routes.payroll,
    element: <UnderConstruction title="Payroll" />,
  },
  {
    path: all_routes.performance,
    element: <UnderConstruction title="Performance" />,
  },
  {
    path: all_routes.reports,
    element: <UnderConstruction title="Reports & Analytics" />,
  },
  {
    path: all_routes.settings,
    element: <UnderConstruction title="Settings" />,
  },
  {
    path: all_routes.help,
    element: <UnderConstruction title="Help Center" />,
  },
];
