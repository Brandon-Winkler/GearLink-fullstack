import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import UsedGearPage from './pages/UsedGearPage.tsx'
import LoginSignupPage from './pages/LoginSignupPage.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "used-gear",
    element: <UsedGearPage/>
  },
  {
    path: "login-signup",
    element: <LoginSignupPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
