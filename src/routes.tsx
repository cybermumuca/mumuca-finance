import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";
import { AuthLayout } from "./pages/layouts/auth";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { AppLayout } from "./pages/layouts/app";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <Error />,
    children: [
      { path: "/", element: <Dashboard /> },
      // { path: "/orders", element: <Orders /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
]);
