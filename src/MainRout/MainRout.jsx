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
import CarDetails from "../Components/CarDetails/CarDetails";
import Updatebutton from "../Components/Updatebutton/Updatebutton";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot></MainRoot>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/brand/:name',
                element: <Brand></Brand>,
                loader: () => fetch('https://tecnology-server-beth1yehc-anik-ghoshs-projects.vercel.app/newCar')
            },

            {
                path: '/addProduct',
                element: <PrivetRoot><AddProduct></AddProduct></PrivetRoot>
            },
            {
                path: '/myCart',
                element: <PrivetRoot><MyCart></MyCart></PrivetRoot>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/carDetails/:id',
                element: <PrivetRoot><CarDetails></CarDetails></PrivetRoot>,
                loader: ({ params }) => fetch(`https://tecnology-server-beth1yehc-anik-ghoshs-projects.vercel.app/newCar/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivetRoot><Updatebutton></Updatebutton></PrivetRoot>,
                loader: ({ params }) => fetch(`https://tecnology-server-beth1yehc-anik-ghoshs-projects.vercel.app/newCar/${params.id}`)
            },

        ]
    },
]);

export default router;