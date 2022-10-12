
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import QuizQue from '../QuizQuestion/QuizQue';

const StartQuiz = () => {
    const QuizDetails = useLoaderData().data
    const {name, questions, total} = QuizDetails
    const [change , setChange] = useState(0)
   
    
    return (
       
        <div>
           <Container>
          <div>
          <h2 className='mb-5 mt-3'>This is quiz of {name}....</h2>
          <h5 className='text-end px-3'>Correct Answer:{change}/{total}</h5>
         

          </div>
           
           <div className=''>
           {
               questions.map(question => <QuizQue key={question.id} change={change} setChange={setChange} que={question}></QuizQue>)
           }
           </div>
           </Container>
            
        </div>
    );
};

export default StartQuiz;