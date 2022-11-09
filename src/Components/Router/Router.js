import { createBrowserRouter } from "react-router-dom";
import Cover from "../Layout/Cover/Cover";
import Home from "../Layout/Home/Home";
import Main from "../Layout/Main/Main";
import DetailsService from "../Pages/DetailsService/DetailsService";
import AllServices from "../Pages/Service/AllServices";
import ServiceMap from "../Pages/Service/ServiceMap";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Cover></Cover>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/allservices',
                element: <ServiceMap></ServiceMap>
            },
            {
                path: '/checkout/:id',
                element: <DetailsService></DetailsService>,
                loader: ({ params }) => fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            }
        ]
    }
]);
export default router;