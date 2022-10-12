
import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import QuizQue from '../QuizQuestion/QuizQue';

const StartQuiz = () => {
    const QuizDetails = useLoaderData().data
    const {name, questions} = QuizDetails
    
    return (
       
        <div>
           <Container>
          <div>
          <h2 className='mb-5 mt-3'>This is quiz of {name}....</h2>
         

          </div>
           
           <div className=''>
           {
               questions.map(question => <QuizQue key={question.id} que={question}></QuizQue>)
           }
           </div>
           </Container>
            
        </div>
    );
};

export default StartQuiz;