import React from 'react';
import { Link } from 'react-router-dom';
import './QuizDetails.css';

const QuizDetails = ({quiz}) => {
    const {id, name, logo} = quiz
    

    
    return (
        <div className='cart-design shadow '>
            <img src={logo} alt="" />
            
            <div className='card-details'>
                <h4 className='my-3'>{name}</h4>
              <Link className='text' to={`/startQuiz/${id}`} > link </Link>
            </div>
            
        </div>
    );
};

export default QuizDetails;