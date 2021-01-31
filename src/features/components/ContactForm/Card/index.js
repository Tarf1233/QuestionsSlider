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



    const inputIsValid = useSelector(selectinputIsValid)
    
    const dispatch = useDispatch();
    const numberQuestions = props.question.length
    

  return (
    <div style={{ height: 600 }}>
    <FullsizePicture
    src="http://localhost:3000/background.jpg"
    sizes="(height: 30px) 30px, 10px">
        
    <div className="Card">
 
      
        <div className='Content'>
            <div className='Titulo'>{props.titulo}</div>
            <div className='Progresso'>
                <div></div>
                <div>Progresso: {props.questionNumber}/10</div>
            </div>
            <div className='contentmain'>
            {props.question.map(function(object, key){
                return <div className='Question' key={key} id={'Questao'+key}>{object}</div>
             })}
            </div>

            <div className='Footer'>
                <div></div>

                <div>
                
                <Button variant="contained" color="primary" 
                 onClick={function () { 


                    if(props.questionNumber === '10'){

                        history.push("/relatorio");                    
                        return 0;
                }


                     var validate = []
                    if(inputIsValid){
                    props.question.map(function(item,key){
                     try{
                         var value = document.getElementById('Questao'+key).getElementsByClassName("MuiInput-input")[0].value
                         if(value.length >5)
                            validate[key] = true
                        else
                            validate[key] = false
                     
                        dispatch(setQuestionsValue(value))
                        } catch(err){
                            console.log(err)

                            try{
                                
                                dispatch(setQuestionsValue2())
                               
                            }catch (err){
                                console.log(err)
                            }
                        }
                 
                        
                    })
                } else {
                        console.log('oks')
                    }

                    
                    var a = false


                    for (var i = 0; i < validate.length; i++) {
                        if (validate[i] === false) {
                            a = false
                            return 0
                          break;
                        }else {
                            a = true
                        }
                      }
              
                    if(a){
                        dispatch(setQuestionNumber())

                        props.question.map(function(item,key){
                            try{
                                var value = document.getElementById('Questao'+key).getElementsByClassName("MuiInput-input")[0].value
                               } catch(err){
                                   console.log(err)
       
                               }
                            }


                        )}

                    else{
                        console.log('a')
                    }
                        
                }
                
                
                }
                >
                    Proximo
                </Button>
                </div>
            </div>
            
          
          

            
        </div>

    
    </div>
    </FullsizePicture>
    </div>
    

    
  );
}

export default CardComponent;
