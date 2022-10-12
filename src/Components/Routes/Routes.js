import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Main from "../Main/Main";
import StartQuiz from "../StartQuiz/StartQuiz";
import Statistics from "../Statistics/Statistics";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                loader: async()=> fetch ('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>
            },
            {
                path: '/statistics',
                loader: async()=> fetch ('https://openapi.programming-hero.com/api/quiz'),
                element: <Statistics></Statistics> ,
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/startQuiz/:quiz',
                loader: async({params}) =>{
                    return  fetch(`https://openapi.programming-hero.com/api/quiz/${params.quiz}`)
                },
                element: <StartQuiz></StartQuiz>

            }
        ]
    }
])