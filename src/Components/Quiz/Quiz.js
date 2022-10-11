import React from 'react';

import './Quiz.css';

const Quiz = ({quiz, id, setCorrect}) => {
   
    return (
        <div className='que-option'>
          
            <div >
                <input  onClick={()=> setCorrect(quiz)}  name={id} type="radio"/>
                <label htmlFor={quiz} >{quiz}</label>
               

            </div>
          
            
           
           
           
            {/* {
                click===correctAnswer ? <p>correct</p> : <p> False</p>
            } */}

            

            
        </div>
    );
};

export default Quiz;