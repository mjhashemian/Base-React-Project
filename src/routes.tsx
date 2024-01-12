import { type RouteObject } from "react-router-dom";

import ProtectedLayout from "./components/layout/ProtectedLayout";
// import ProtectedLayout from "../../../components/layout/ProtectedLayout";
import MainLayout from "./components/layout/MainLayout";
import DashboardLayout from "./components/layout/Dashboard";

import NotFound from "./pages/NotFound";
import DashboardPage from "./pages/DashboardPage";

import PermissionPage from "./pages/accounts/PermissionPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <ProtectedLayout />,
        children: [
          {
            path: "/",
            element: <DashboardLayout />,
            children: [
              {
                index: true,
                element: <DashboardPage />,
              },
              {
                path: "/permissions",
                element: <PermissionPage />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];
