
import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/layout/layout"
import Home from "../pages/Home"
import BookForm from "../pages/BookForm"
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
                element: <BookForm />
            },
            {
                path: "/edit/:id",
                element: <BookForm />
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
