import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../MainRoot/MainRoot";
import ErrorPage from "../SharedPage/ErrorPage";
import Home from "../Pages/HomePage/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import LoginPage from "../Pages/LoginPage/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot></MainRoot>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myCart',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
        ]
    },
]);

export default router;