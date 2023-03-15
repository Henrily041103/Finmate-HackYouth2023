import { createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        path:'/',
        element: null
    },
    {
        path:'/login',
        element: null
    },
    {
        path:'/register',
        element: null
    },
    {
        path:'/user',
        element: null,
        children: [
            {
                path:'user/home',
                element: null
            },
            {
                path:'user/products',
                element: null,
            },
            {
                path:'/signup',
                element: null
            },
        ]
    },
    {
        path:'/investor',
        element: null,
        children: [
            {
                path:'investor/home',
                element: null
            },
            {
                path:'investor/products',
                element: null,
            },
            {
                path:'/search',
                element: null
            },
        ]
    },
]);

export default router;
