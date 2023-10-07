import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Gallery from "../Pages/Gallery/Gallery";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error Page/Error";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";


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
                element: <About></About>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: () => fetch('/event.json')
            }
        ]
    }
])

export default myCreatedRoute;