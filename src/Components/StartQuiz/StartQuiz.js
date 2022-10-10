import React from 'react';
import { useLoaderData } from 'react-router-dom';

const StartQuiz = () => {
    const QuizDetails = useLoaderData().data
    const {name, questions} = QuizDetails
    
    return (
       
        <div>
            <h2>this is quiz {name}</h2>
            <p>{questions.length}</p>
            
        </div>
    );
};

export default StartQuiz;