import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Gallery from "../Pages/Gallery/Gallery";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error Page/Error";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Registration from "../Pages/Login/Registration";
import PrivateRout from "../PrivateRout/PrivateRout";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/event.json')
            },
            {
                path: '/about',
                element: <PrivateRout>
                    <About></About>
                </PrivateRout>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/contact',
                element: <PrivateRout>
                    <Contact></Contact>
                </PrivateRout>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/services/:id',
                element: <PrivateRout><ServiceDetails></ServiceDetails></PrivateRout>,
                loader: () => fetch('/event.json')
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    }
])

export default myCreatedRoute;