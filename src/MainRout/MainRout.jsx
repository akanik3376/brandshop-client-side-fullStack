import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../MainRoot/MainRoot";
import ErrorPage from "../SharedPage/ErrorPage";
import Home from "../Pages/HomePage/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Register from "../Components/Register/Register";
import MyCart from "../Pages/MyCart/MyCart";
import PrivetRoot from "./PrivetRoot";
import Brand from "../Components/Brand/Brand";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot></MainRoot>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/public/data.json')
            },
            {
                path: '/brand/:id',
                element: <Brand></Brand>,
                loader: () => fetch('/public/data.json')
            },

            {
                path: '/addProduct',
                element: <PrivetRoot><AddProduct></AddProduct></PrivetRoot>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);

export default router;