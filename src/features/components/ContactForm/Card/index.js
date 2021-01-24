import './index.css';
import Button from '@material-ui/core/Button';

import {
    setQuestionsValue,
    setQuestionsValue2,
    setQuestionNumber,
    selectinputIsValid,
    setinputIsValid
  } from './SetQuestions';

import { useSelector, useDispatch } from 'react-redux';



function Card(props) {  


    const inputIsValid = useSelector(selectinputIsValid)
    
    const dispatch = useDispatch();
    const numberQuestions = props.question.length
    

  return (
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
                    alert('dale')
                    
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
                    validate.map(function (value){
                        if(!value){
                            a = false
                            return 0
                        } else {
                            a = true
                        }
                    })
                    console.log(validate)
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

    
  );
}

export default Card;
