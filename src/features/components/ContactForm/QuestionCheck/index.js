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

import {connect} from 'react-redux'






class Card  extends React.Component{


  constructor(props){
    super(props)

    this.state = {
      questionNumber: 0,
      stateschecks:{
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false
      },
      options:{}
    };
  }



componentDidUpdate(){

  if(this.props.questions.questionNumber > this.state.questionNumber){
 
    this.setState({questionNumber: this.props.questions.questionNumber})
    this.setState({ ...this.state.statecheck, stateschecks:{  checkedA: false, checkedB: false, checkedC: false, checkedD: false }})
    this.setState({ ...this.state.statecheck, options:{}})
    this.props.setOption(this.state)

    
  }
}



handleChange = (event, optionName) => {
    this.setState({ options:{...this.state.options, [event.target.name]: event.target.checked}}, () => {
      this.props.setOption(this.state)
    })



    



switch(optionName){
  case 0:
    this.setState({
      stateschecks:{...this.state.stateschecks, checkedA: !this.state.stateschecks.checkedA}
    })
    break
  case 1:
    this.setState({
      stateschecks:{...this.state.stateschecks, checkedB: !this.state.stateschecks.checkedB}

    })
    break
  case 2:
  this.setState({
    stateschecks:{...this.state.stateschecks, checkedC: !this.state.stateschecks.checkedC}

  })
  break
  case 3:
    this.setState({
      stateschecks:{...this.state.stateschecks, checkedD: !this.state.stateschecks.checkedD}

    })
  break
}
  
  
  
  };

    setQuestion(){
      this.state.map(function(dale) {
        alert(dale)
      })
    }


  
  
render(){

  console.log('dale'+this.props.optionscheck)


  
let options =    <FormGroup row>
                    <FormControlLabel
                      control={ <Checkbox checked={this.state.stateschecks.checkedA} onChange={(event) => this.handleChange(event, 0)} name={this.props.optionscheck[0]} />}
                      label={this.props.optionscheck[0]}
                    />
                  </FormGroup> 



  if(this.props.optionsnumber === 1 ){
    options =    
                    <FormGroup row>
                      <FormControlLabel
                        control={ <Checkbox checked={this.state.stateschecks.checkedA} onChange={(event) => this.handleChange(event, 0)} name={this.props.optionscheck[0]}/>}
                        label={this.props.optionscheck[0]}
                      />
                    </FormGroup>
                 
  } else if (this.props.optionsnumber === 2){
    options =   
                    <FormGroup row>
                      <FormControlLabel
                        control={ <Checkbox checked={this.state.stateschecks.checkedA} onChange={(event) => this.handleChange(event,0)} name={this.props.optionscheck[0]} />}
                        label={this.props.optionscheck[0]}
                      />
                        <FormControlLabel
                        control={ <Checkbox checked={this.state.stateschecks.checkedB} onChange={(event) => this.handleChange(event,1)} name={this.props.optionscheck[1]} />}
                        label={this.props.optionscheck[1]}
                      />
                    </FormGroup>
                 
                 

  }else if (this.props.optionsnumber === 3){
    options =        <FormGroup row>
                        <FormControlLabel
                          control={ <Checkbox checked={this.state.stateschecks.checkedA} onChange={(event) => this.handleChange(event,0)} name= {this.props.optionscheck[0]} />}
                          label={this.props.optionscheck[0]}
                        />
                        <FormControlLabel
                          control={ <Checkbox checked={this.state.stateschecks.checkedB} onChange={(event) => this.handleChange(event,1)} name = {this.props.optionscheck[1]} />}
                          label={this.props.optionscheck[1]}
                        />
                        <FormControlLabel
                          control={ <Checkbox checked={this.state.stateschecks.checkedC} onChange={(event) => this.handleChange(event,2)} name = {this.props.optionscheck[2]}/>}
                          label={this.props.optionscheck[2]}
                        />
                      </FormGroup>

  } else if (this.props.optionsnumber === 4){
    options =     <FormGroup row> 
                    <FormControlLabel
                      control={ <Checkbox checked={this.state.stateschecks.checkedA} onChange={(event) => this.handleChange(event,0)} name={this.props.optionscheck[0]}/>}
                      label={this.props.optionscheck[0]}
                    />
                    <FormControlLabel
                      control={ <Checkbox checked={this.state.stateschecks.checkedB} onChange={(event) => this.handleChange(event,1)} name={this.props.optionscheck[1]} />}
                      label={this.props.optionscheck[1]}
                    />
                    <FormControlLabel
                      control={ <Checkbox checked={this.state.stateschecks.checkedC} onChange={(event) => this.handleChange(event,2)} name={this.props.optionscheck[2]} />}
                      label={this.props.optionscheck[2]}
                    />
                    <FormControlLabel
                      control={ <Checkbox checked={this.state.stateschecks.checkedD} onChange={(event) => this.handleChange(event,3)} name={this.props.optionscheck[3]} />}
                      label={this.props.optionscheck[3]}
                    />
                  </FormGroup>
                  
                  }

  return (
    
    <div>
            <div><Question question={this.props.question}/></div>
            <div className='rowinputs'>
                {options}
            </div>
</div>


  
  )
}}


const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    setOption: (value) => dispatch(dispatch(setOption(value)))
  }
}

const mapStateToProps = state => ({ questions: state.questions })

export default connect(mapStateToProps ,mapDispatchToProps) (Card);