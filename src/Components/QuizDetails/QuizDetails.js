import React from 'react';
import { Link } from 'react-router-dom';
import './QuizDetails.css';

const QuizDetails = ({quiz}) => {
    const {id, name, logo} = quiz
    // console.log(id)

    
    return (
        <div className='cart-design '>
            <img src={logo} alt="" />
            <div className='card-details'>
                <h4>{name}</h4>
               <Link to={`/startQuiz/${id}`} > link </Link>
            </div>
            
        </div>
    );
};

export default QuizDetails;