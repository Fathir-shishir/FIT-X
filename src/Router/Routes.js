import Home from "../pages/Home";
import Services from "../pages/Services";
import OurClasses from "../pages/OurClasses";


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
    }
]