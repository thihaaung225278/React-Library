
import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/layout/layout"
import Home from "../pages/Home"
import Create from "../pages/Create"
import NotFound from "../pages/NotFound"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/create",
                element: <Create />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },
]);

export default router;
