import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Quiz.css';



const Quiz = ({quiz, id, setCorrect}) => {
    // const  [click, setClick] = useState('');
    

    // const clicked = (id) =>{
    //     setCorrect(id)
    // }
    // const correct = () => toast("Correct Answer");
    

//   if(click){
//     // console.log(click)
    
//      if(click === correctAnswer){
//         setCorrect('Correct')
//         correct()
//         console.log('click')
//     }
//     else if(click !== correctAnswer){
        
//         setCorrect('Not Correct')
        
//     } 
//   }

    //   useEffect(()=>{
    //     if(click){
    //         click === correctAnswer ? setCorrect('Correct'): setCorrect('Not Correct')
    //        }
    //   },[click])

    
  
    return (
        <div className='que-option'>
          
            <div >
                <input  onClick={()=> setCorrect(quiz)}  name={id} type="radio"/>
                <label htmlFor={quiz} >{quiz}</label>
                <ToastContainer />

            </div>
          
            
           
           
           
            {/* {
                click===correctAnswer ? <p>correct</p> : <p> False</p>
            } */}

            

            
        </div>
    );
};

export default Quiz;