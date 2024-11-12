import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
