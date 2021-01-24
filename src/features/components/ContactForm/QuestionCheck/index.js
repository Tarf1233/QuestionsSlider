import './index.css';
import React from 'react'
import Question from '../Question'
import Checkbox from '@material-ui/core/Checkbox';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import { useSelector, useDispatch } from 'react-redux';

import lifecycle from 'react-pure-lifecycle';


import {
  setOption
} from '../Card/SetQuestions';







function Card(props) {

  const dispatch = useDispatch();

  const [state, setState] = React.useState({
  });



  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    dispatch(setOption({ ...state, [event.target.name]: event.target.checked }))
  
  
  
  };

    function setQuestion(){
      state.map(function(dale) {
        alert(dale)
      })
    }
  

  
var options =    <FormGroup row>
                    <FormControlLabel
                      control={ <Checkbox checked={state.checkedA} onChange={handleChange} name={props.options[0]} />}
                      label={props.options[0]}
                    />
                  </FormGroup> 



  if(props.optionsnumber === 1 ){
    options =    
                    <FormGroup row>
                      <FormControlLabel
                        control={ <Checkbox checked={state.checkedA} onChange={handleChange} name={props.options[0]}/>}
                        label={props.options[0]}
                      />
                    </FormGroup>
                 
  } else if (props.optionsnumber === 2){
    options =   
                    <FormGroup row>
                      <FormControlLabel
                        control={ <Checkbox checked={state.checkedA} onChange={handleChange} name={props.options[0]} />}
                        label={props.options[0]}
                      />
                        <FormControlLabel
                        control={ <Checkbox checked={state.checkedB} onChange={handleChange} name={props.options[1]} />}
                        label={props.options[1]}
                      />
                    </FormGroup>
                 
                 

  }else if (props.optionsnumber === 3){
    options =        <FormGroup row>
                        <FormControlLabel
                          control={ <Checkbox checked={state.checkedA} onChange={handleChange} name= {props.options[0]} />}
                          label={props.options[0]}
                        />
                        <FormControlLabel
                          control={ <Checkbox checked={state.checkedB} onChange={handleChange} name = {props.options[1]} />}
                          label={props.options[1]}
                        />
                        <FormControlLabel
                          control={ <Checkbox checked={state.checkedC} onChange={handleChange} name = {props.options[2]}/>}
                          label={props.options[2]}
                        />
                      </FormGroup>

  } else if (props.optionsnumber === 4){
    options =     <FormGroup row> 
                    <FormControlLabel
                      control={ <Checkbox checked={state.checkedA} onChange={handleChange} name={props.options[0]}/>}
                      label={props.options[0]}
                    />
                    <FormControlLabel
                      control={ <Checkbox checked={state.checkedB} onChange={handleChange} name={props.options[1]} />}
                      label={props.options[1]}
                    />
                    <FormControlLabel
                      control={ <Checkbox checked={state.checkedC} onChange={handleChange} name={props.options[2]} />}
                      label={props.options[2]}
                    />
                    <FormControlLabel
                      control={ <Checkbox checked={state.checkedD} onChange={handleChange} name={props.options[3]} />}
                      label={props.options[3]}
                    />
                  </FormGroup>
                  
                  }

  return (
    
    <div>
            <div><Question question={props.question}/></div>
            <div className='rowinputs'>
                {options}
            </div>
</div>



  )
}

export default Card