
import { createBrowserRouter} from "react-router-dom";
import App from '../view/App'

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                path:'login',
                element: <div>Login</div>
            },
            {
                path:'register',
                element: <div>Register</div>
            },
            {
                path:'home',
                element: <div>Home</div>
            },
            {
                path:'products',
                element: <div>Products</div>,
                children: [
                    {
                        path: '/:pageNum',
                        element: <h1>1</h1>
                    }
                ]
            },
            {
                path:'signup',
                element: <div>Signup</div>
            },
        ]
    },
    
]);

export default router;
