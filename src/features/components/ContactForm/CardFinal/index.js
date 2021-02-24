import './index.css';
import Button from '@material-ui/core/Button';
import { FullsizePicture, Picture } from 'react-responsive-picture';
import { useHistory } from 'react-router-dom';


import {
    setQuestionsValue,
    setQuestionsValue2,
    setQuestionNumber,
    selectinputIsValid,
    setinputIsValid
  } from './SetQuestions';

import { useSelector, useDispatch } from 'react-redux';





function CardComponent(props) {  
  
    const history = useHistory();


    

  return (
    <div style={{ height: 600 }}>
    <FullsizePicture
    src="http://localhost:3000/background.jpg"
    sizes="(height: 30px) 30px, 10px">
        
    <div className="Card">
 
      
        <div className='Content2'>
            
            <div className='contentmain'>
            <div className='Titulo2'>{props.title}</div>

            <div className='Footer'>
                

                
            </div>
            
          
          

            
        </div>
        </div>
    
    </div>
    </FullsizePicture>
    </div>
    

    
  );
}

export default CardComponent;