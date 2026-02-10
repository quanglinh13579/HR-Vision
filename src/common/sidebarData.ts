import { all_routes } from "../router/all_routes";

export interface MenuItem {
  title: string;
  icon: string;
  link: string;
  base?: string;
}

const routes = all_routes;

export const sidebarData: MenuItem[] = [
  {
    title: "Dashboard",
    icon: "dashboard",
    link: routes.dashboard,
    base: "dashboard",
  },
  {
    title: "Employee Directory",
    icon: "users",
    link: routes.employeeDirectory,
    base: "employees",
  },
  {
    title: "Attendance & Leave",
    icon: "calendar",
    link: routes.attendance,
    base: "attendance",
  },
  {
    title: "Recruitment",
    icon: "recruitment",
    link: routes.recruitment,
    base: "recruitment",
  },
  {
    title: "Payroll",
    icon: "payroll",
    link: routes.payroll,
    base: "payroll",
  },
  {
    title: "Performance",
    icon: "performance",
    link: routes.performance,
    base: "performance",
  },
  {
    title: "Reports & Analytics",
    icon: "reports",
    link: routes.reports,
    base: "reports",
  },
];

export const otherMenuData: MenuItem[] = [
  {
    title: "Settings",
    icon: "settings",
    link: routes.settings,
    base: "settings",
  },
  {
    title: "Help Center",
    icon: "help-circle",
    link: routes.help,
    base: "help",
  },
];
