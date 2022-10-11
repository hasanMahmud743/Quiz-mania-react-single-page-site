import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQue from '../QuizQuestion/QuizQue';

const StartQuiz = () => {
    const QuizDetails = useLoaderData().data
    const {name, questions} = QuizDetails
    
    return (
       
        <div>
            <h2>this is quiz of {name}....</h2>
           
                <div className=''>
                {
                    questions.map(question => <QuizQue key={question.id} que={question}></QuizQue>)
                }
                </div>
            
        </div>
    );
};

export default StartQuiz;