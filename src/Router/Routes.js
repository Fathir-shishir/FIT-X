import Home from "../pages/Home";
import Services from "../pages/Services";
import OurClasses from "../pages/OurClasses";
import Pricing from "../pages/Pricing";


export const AppRoutes = [
    {
        path: '/Home',
        exact: true,
        renderPage: <Home />
    },
    {
        path: '/Services',
        exact: true,
        renderPage: <Services />
    },
    {
        path: '/Schedules',
        exact: true,
        renderPage: <OurClasses />
    },
    {
        path: '/Pricing',
        exact: true,
        renderPage: <Pricing />
    }
]