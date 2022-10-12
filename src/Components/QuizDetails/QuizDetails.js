import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './QuizDetails.css';

const QuizDetails = ({quiz}) => {
    const {id, name, logo, total} = quiz
    

    
    return (
        <div className='cart-design text shadow mb-5 '>
            <Link  to={`/startQuiz/${id}`} > 
                <img src={logo} alt="" />
                
                <div className='card-details'>
                    <h3 className='my-3'>{name}</h3>
                    <div className='d-flex px-2 py-1 justify-content-between'>
                         <p className='fw-bold'>  Total Quiz: {total}</p>
                         <FontAwesomeIcon className='rounded-circle' icon={faArrowRight} />


                    </div>
                </div>
            </Link>
            
        </div>
    );
};

export default QuizDetails;