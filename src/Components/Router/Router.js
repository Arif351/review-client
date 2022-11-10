import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home/Home";
import Main from "../Layout/Main/Main";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import DetailsService from "../Pages/DetailsService/DetailsService";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Review from "../Pages/Review/Review";
// import AllServices from "../Pages/Service/AllServices";
import ServiceMap from "../Pages/Service/ServiceMap";
import Signup from "../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allservices',
                element: <ServiceMap></ServiceMap>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/checkout/:id',
                element: <DetailsService></DetailsService>,
                loader: ({ params }) => fetch(`https://account-server.vercel.app/serviceDetails/${params.id}`)
            },
            {
                path: '/review/:id',
                element: <PrivateRoute><Review></Review></PrivateRoute>,
                loader: ({ params }) => fetch(`https://account-server.vercel.app/serviceDetails/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://account-server.vercel.app/serviceDetails/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
            // {
            //     path: '/myreviews',
            //     element: <PrivateRoute><Review></Review></PrivateRoute>
            // }
        ]
    }
]);
export default router;