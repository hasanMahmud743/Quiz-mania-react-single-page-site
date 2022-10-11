import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quiz from '../Quiz/Quiz';




const QuizQue = ({que}) => {
    const {question, options, id, correctAnswer} = que
    const [match, setMatch] = useState('Select Ones')
    console.log(question)
    // const cleanText  = question.slice('<p>')
    // console.log(cleanText)
    
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
        <div className='quiz container' >
            <h4>{question}</h4>
            <p> Ans:{match}</p>
            <ToastContainer />
               <div className='border shadow m-5 auto   rounded  '>
               <Container>
               <Row >
                    <Col sm={12}> 
                        
                            
                            {
                                options.map((option, ind)  =><Quiz setCorrect={setCorrect} key={ind}  correctAnswer={correctAnswer} id={id} quiz={option}></Quiz>)
                            }
                            
                        
                    </Col>
                </Row>
               </Container>
                  
               </div>
            {
               
            }
            
        </div>
    );
};

export default QuizQue;