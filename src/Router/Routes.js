import Home from "../pages/Home";
import Services from "../pages/Services";


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
    }
]