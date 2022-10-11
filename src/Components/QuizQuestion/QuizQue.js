import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quiz from '../Quiz/Quiz';
import './QuizQue.css';



const QuizQue = ({que}) => {
    const {question, options, id, correctAnswer} = que
    const [match, setMatch] = useState('Select Ones')
    
    const setCorrect = id =>{
        

        
        if(id === correctAnswer){
            setMatch('Your answer is Correct')
            showCorrect()
           
        } else{
            setMatch('You pinned in a wrong Answer')
            showWrong()
        }
    }

    const showCorrect = () => toast('Your answer is Correct');
    const showWrong =()=> toast('You pinned in a wrong Answer')

     
   
        
    return (
        <div className='quiz'>
            <h4>{question}</h4>
            <p> Ans:{match}</p>
            <ToastContainer />
            {
                options.map((option, ind)  =><Quiz setCorrect={setCorrect} key={ind}  correctAnswer={correctAnswer} id={id} quiz={option}></Quiz>)
            }
            {
               
            }
            
        </div>
    );
};

export default QuizQue;