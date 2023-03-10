import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quiz from '../Quiz/Quiz';
import './QuizQue.css';




const QuizQue = ({que, setChange, change}) => {
    const {question, options, id, correctAnswer} = que
    const [match, setMatch] = useState('Select Ones')
    
    const cleanQue = question.split('<p>').join('')
    const cleanQue2 = cleanQue.split('</p>').join('')

   console.log(setChange)
    
    const setCorrect = id =>{
        

        
        if(id === correctAnswer){
            setMatch('Your answer is Correct')  
            showCorrect()
            setChange(change + 1)
           
        } else{
            setMatch('You pinned in a wrong Answer')
            showWrong()
        }
    }

    const eyeClick = ans=>{
        showEye(ans)
    }


    const showCorrect = () => toast('Your answer is Correct');
    const showWrong =()=> toast('You pinned in a wrong Answer')
    const showEye= (id) => toast(`Correct Ans: ${id}`)

     
   
        
    return (
        <div className='quiz container quiz-container border my-5 p-lg-3 rounded' >
           <div className='d-flex quiz-que align-items-center  px-5 justify-content-between'>
                <h4 className='text-left'>{cleanQue2}</h4>
                <FontAwesomeIcon className='eye' onClick={()=> eyeClick(correctAnswer)} icon={faEye} />
           </div>
            
            <ToastContainer />
               <div className='border  shadow m-5 auto   rounded  '>
               <Container>
               <Row >
               
                        
                    
                    {
                        options.map((option, ind)  =>
                       <Col key={ind} md={6}>
                         <Quiz setCorrect={setCorrect}   correctAnswer={correctAnswer} id={id} quiz={option}></Quiz>
                       
                        </Col>)
                        
                    }
                            
                        
               
                </Row>
               </Container>
                  
               </div>
            {
               
            }
            
        </div>
    );
};

export default QuizQue;