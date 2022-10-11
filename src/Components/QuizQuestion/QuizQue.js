import React, { useState } from 'react';
import Quiz from '../Quiz/Quiz';
import './QuizQue.css';

const QuizQue = ({que}) => {
     const [correct, setCorrect] = useState('Not Correct')
    
    const {question, options, id, correctAnswer} = que
    return (
        <div className='quiz'>
            <h4>{question}</h4>
            <p> Ans:{correct}</p>
            {
                options.map(option =><Quiz setCorrect={setCorrect}  correctAnswer={correctAnswer} id={id} quiz={option}></Quiz>)
            }
            
        </div>
    );
};

export default QuizQue;