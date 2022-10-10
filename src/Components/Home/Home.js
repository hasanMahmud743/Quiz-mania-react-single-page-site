import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';
import './Home.css';

const Home = () => {
    const quizs = useLoaderData().data
    console.log(quizs)
    return (
        <div>
            <h2>This is home Components</h2>

            <div className='cart-componen d-flex'>
                
                    {
                        quizs.map(quiz=> <QuizDetails quiz={quiz} key={quiz.id}></QuizDetails>)
                    }
               
            </div>
        </div>
    );
};

export default Home;