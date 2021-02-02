import Card from '../components/ContactForm/Card'
import QuestionInput from '../components/ContactForm/QuestionInput'
import QuestionCheck from '../components/ContactForm/QuestionCheck'


import {
  setQuestionsValue,
  setQuestionsValue2,
  setQuestionNumber,
  selectquestionNumber,
  selectAsks

  
} from '../components/ContactForm/Card/SetQuestions';

import { useSelector, useDispatch } from 'react-redux';

import './index.css';






function App() {

  const asks = useSelector(selectAsks)


  var cards = [
    <Card 
      titulo='Simulador de Investimentos' 
      questionNumber={1}
      question={[
        <QuestionInput question={asks[0]} />, 
        <QuestionCheck 
          question={asks[1]} 
          optionsnumber={4} 
          options= {['dormir', 'comer', 'beber', 'sentar']}
        />, 
        <QuestionInput 
          question={asks[2]} 
        />
      ]
    }/>,


    <Card 
      titulo={asks[3]}
      questionNumber={2}
      question={[
        <QuestionInput question='qual seu endereço?'/>, 
        <QuestionCheck 
          question={asks[4]}
          optionsnumber={4} 
          options= {['100', '200', '300', '400']}
        />, 
        <QuestionInput 
          question={asks[5]}
        />
      ]
    }/>,

    <Card 
      titulo={asks[5]}
      questionNumber={3} 
      question={[
        
        <QuestionInput question={asks[7]}/>, 

        <QuestionCheck 
        question={asks[6]}
        optionsnumber={3} 
        options= {['moderno', 'moderado', 'ousado']}
      />, 
       
        <QuestionInput 
          question={asks[8]}
        />
      ]
    }/>,
  ]




  const count = useSelector(selectquestionNumber);
  return (
    <div className="App">
      {cards[count]}
    </div>
  );
}

export default App;
