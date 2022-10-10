import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Statistics from "../Statistics/Statistics";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics> ,
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            }
        ]
    }
])