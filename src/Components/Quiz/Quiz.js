import React from 'react';

import './Quiz.css';

const Quiz = ({quiz, id, setCorrect}) => {
   
    return (
        <div className='que-option'>
          
            <div className=' py-2'>

                <input   onClick={()=> setCorrect(quiz)} value={quiz} id={quiz}  name={id} type="radio"/>
                <label className='px-1' htmlFor={quiz} >{quiz}</label>
                    
            </div>
            
        </div>
    );
};

export default Quiz;