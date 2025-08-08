
import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/layout/layout"
import Home from "../pages/Home"
import Create from "../pages/Create"
import NotFound from "../pages/NotFound"
import BookDetail from "../pages/BookDetail"


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
                path: "/books/:id",
                element: <BookDetail />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },
]);

export default router;
