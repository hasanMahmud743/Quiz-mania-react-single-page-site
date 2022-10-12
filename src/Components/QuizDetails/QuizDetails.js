import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './QuizDetails.css';

const QuizDetails = ({quiz}) => {
    const {id, name, logo, total} = quiz
    

    
    return (
        <div className='cart-design text shadow-lg mb-5 '>
           
                <img src={logo} alt="" />
                
                <div className='card-details'>
                    <h3 className='my-3'>{name}</h3>
                    <div className='d-flex px-2 py-1 justify-content-between'>
                         <p className='fw-bold'>  Total Quiz: {total}</p>
                         
                         <Link  to={`/startQuiz/${id}`} > 
                         <FontAwesomeIcon className='icon' icon={faArrowRight} />
                         </Link>

                    </div>
                </div>
          
            
        </div>
    );
};

export default QuizDetails;