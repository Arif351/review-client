import { createBrowserRouter } from "react-router-dom";
import Cover from "../Layout/Cover/Cover";
import Home from "../Layout/Home/Home";
import Main from "../Layout/Main/Main";
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
            }
        ]
    }
]);
export default router;