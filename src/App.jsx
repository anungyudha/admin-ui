import React, { useState } from "react";
import "./App.css";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import ErrorPage from "./pages/error";
import DashboardPage from "./pages/dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signin",
      element: <SignInPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
  ]);

  return <RouterProvider router={myRouter} />;
}

export default App;