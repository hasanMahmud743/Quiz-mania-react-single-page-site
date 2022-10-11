import React, { useState } from 'react';
import Quiz from '../Quiz/Quiz';
import './QuizQue.css';



const QuizQue = ({que}) => {
    const {question, options, id, correctAnswer} = que
    const [match, setMatch] = useState('Select Ones')
    
    const setCorrect = id =>{
console.log(id)
if(id === correctAnswer){
    console.log('mat')
    setMatch('Your answer is Correct')
} else(
    setMatch('You pinned in a wrong Answer')
)
    



    }
     
   
    //  if(correct === correctAnswer){
        
    // console.log('correct')
    //  }


    
    
        
   
//    if(correct){
//     // correct === correctAnswer ? setUpdate('Correct') : setUpdate('Not correct')
//    }
        
    return (
        <div className='quiz'>
            <h4>{question}</h4>
            <p> Ans:{match}</p>
            {
                options.map((option, ind)  =><Quiz setCorrect={setCorrect} key={ind}  correctAnswer={correctAnswer} id={id} quiz={option}></Quiz>)
            }
            
        </div>
    );
};

export default QuizQue;