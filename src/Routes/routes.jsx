import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/logIn";
import Register from "../Pages/Register/Register";
import ViewRecipes from "../Pages/ViewRecipes/ViewRecipes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:"/",
                element:<Home/>
            },{
				path: '/login',
				element: <LogIn />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/recipes/:id',
				element:<PrivateRoutes><ViewRecipes/></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/chefs/${params.id}`)
			},
        ]
        
    }
])