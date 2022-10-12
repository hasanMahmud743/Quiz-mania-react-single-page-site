import React from 'react';
import { Link } from 'react-router-dom';
import './QuizDetails.css';

const QuizDetails = ({quiz}) => {
    const {id, name, logo, total} = quiz
    

    
    return (
        <div className='cart-design text shadow '>
            <Link  to={`/startQuiz/${id}`} > 
                <img src={logo} alt="" />
                
                <div className='card-details'>
                    <h4 className='my-3'>{name}</h4>
                    <p> Total Quiz: {total}</p>
                </div>
            </Link>
            
        </div>
    );
};

export default QuizDetails;