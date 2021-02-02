import React from 'react';
import Question from '../Question'
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


import {
  setQuestionsValue,
  setQuestionsValue2,
  setQuestionNumber,
  selectquestionNumber,
  setinputIsValid

  
} from '../Card/SetQuestions';

import { useSelector, useDispatch } from 'react-redux';
import {connect} from 'react-redux'

 
class Card extends React.Component {
 
  constructor(props){
    super(props)
  }

  
    state = {
        email: '',
    }
 
    handleChange = (event) => {
        const email = event.target.value;
        this.setState({ email });
    }
 
    handleSubmit = () => {
        // your submit logic
    }
 
    render() {
        const { email } = this.state;
        ValidatorForm.addValidationRule('min', (value) => {
          if (value.length < 5 ) {
              this.props.idk(0)
              return false;
          }
          this.props.idk(1)
          return true;
      });
        return (
          <div>
          <div><Question question={this.props.question}/></div>
            <ValidatorForm
                //ref="form" tava dando erro 
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    className='MuiInputBase-root'
                    onChange={this.handleChange}
                    name="email"
                    value={email}
                    validators={['min']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
            </ValidatorForm>
          </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    idk: (value) => dispatch(dispatch(setinputIsValid(value)))
  }
}

export default connect(null,mapDispatchToProps) (Card);

