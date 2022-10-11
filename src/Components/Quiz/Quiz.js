import React, { useState } from 'react';


import './Quiz.css';

const Quiz = ({quiz, id, setCorrect, correctAnswer}) => {
    const [click, setClick] = useState('')
    

  
    if(click === correctAnswer){
        
        setCorrect('Correct')
        
    } 

    
  
    return (
        <div className='que-option'>
            {/* <p>{quiz}</p> */}
            
            <input onClick={()=>setClick(quiz)} name={id} type="radio"/>
            <label for={quiz} >{quiz}</label>
           
           
            {/* {
                click===correctAnswer ? <p>correct</p> : <p> False</p>
            } */}

            

            
        </div>
    );
};

export default Quiz;