import { createBrowserRouter} from "react-router-dom";
import App from '../App'

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>
    },
    {
        path:'login',
        element: <div>Login</div>
    },
    {
        path:'register',
        element: null
    },
    {
        path:'user',
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
                path:'user/signup',
                element: null
            },
        ]
    },
    
    {
        path:'investor',
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
                path:'investor/search',
                element: null
            },
        ]
    },
]);

export default router;
