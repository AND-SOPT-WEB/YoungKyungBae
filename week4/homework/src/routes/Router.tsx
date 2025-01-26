import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyPage from "../pages/MyPage";
import Hobby from '../components/MyPage/Hobby';
import MyInformation from '../components/MyPage/MyInformation';

const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    {
        path: "/mypage",
        element: <MyPage />,
        children: [
            { path: "hobby", element: <Hobby /> },
            { path: "my-info", element: <MyInformation /> },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
