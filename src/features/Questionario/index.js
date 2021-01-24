import Card from '../components/ContactForm/Card'
import QuestionInput from '../components/ContactForm/QuestionInput'
import QuestionCheck from '../components/ContactForm/QuestionCheck'


import {
  setQuestionsValue,
  setQuestionsValue2,
  setQuestionNumber,
  selectquestionNumber

  
} from '../components/ContactForm/Card/SetQuestions';

import { useSelector, useDispatch } from 'react-redux';

import './index.css';


var cards = [
              <Card 
                titulo='Simulador de Investimentos' 
                questionNumber='1' 
                question={[
                  <QuestionInput question='qual seu nome?'/>, 
                  <QuestionCheck 
                    question='qual seu sexo?' 
                    optionsnumber={4} 
                    options= {['dormir', 'comer', 'beber', 'sentar']}
                  />, 
                  <QuestionInput 
                    question='qual seu nome?' 
                  />
                ]
              }/>,


              <Card 
                titulo='Simulador de Investimentos' 
                questionNumber='2' 
                question={[
                  <QuestionInput question='qual seu sobrenome?'/>, 
                  <QuestionCheck 
                    question='qual seu sexo?' 
                    optionsnumber={4} 
                    options= {['dormir', 'comer', 'beber', 'sentar']}
                  />, 
                  <QuestionInput 
                    question='qual seu nome?' 
                  />
                ]
              }/>,


              <Card 
                titulo='Simulador de Investimentos' 
                questionNumber='3' 
                question={[
                  <QuestionInput question='qual seu nome?'/>, 
                  <QuestionCheck 
                    question='qual seu sexo?' 
                    optionsnumber={4} 
                    options= {['dormir', 'comer', 'beber', 'sentar']}
                  />, 
                  <QuestionInput 
                    question='qual seu nome?' 
                  />
                ]
              }/>,


              <Card 
                titulo='Simulador de Investimentos' 
                questionNumber='4' 
                question={[
                  <QuestionInput question='qual seu nome?'/>, 
                  <QuestionCheck 
                    question='qual seu sexo?' 
                    optionsnumber={4} 
                    options= {['dormir', 'comer', 'beber', 'sentar']}
                  />, 
                  <QuestionInput 
                    question='qual seu nome?' 
                  />
                ]
              }/>,


              <Card 
                titulo='Simulador de Investimentos' 
                questionNumber='5' 
                question={[
                  <QuestionInput question='qual seu nome?'/>, 
                  <QuestionCheck 
                    question='qual seu sexo?' 
                    optionsnumber={4} 
                    options= {['dormir', 'comer', 'beber', 'sentar']}
                  />, 
                  <QuestionInput 
                    question='qual seu nome?' 
                  />
                ]
              }/>,


              <Card 
                titulo='Simulador de Investimentos' 
                questionNumber='6' 
                question={[
                  <QuestionInput question='qual seu nome?'/>, 
                  <QuestionCheck 
                    question='qual seu sexo?' 
                    optionsnumber={4} 
                    options= {['dormir', 'comer', 'beber', 'sentar']}
                  />, 
                  <QuestionInput 
                    question='qual seu nome?' 
                  />
                ]
              }/>,


              <Card 
                titulo='Simulador de Investimentos' 
                questionNumber='7' 
                question={[
                  <QuestionInput question='qual seu nome?'/>, 
                  <QuestionCheck 
                    question='qual seu sexo?' 
                    optionsnumber={4} 
                    options= {['dormir', 'comer', 'beber', 'sentar']}
                  />, 
                  <QuestionInput 
                    question='qual seu nome?' 
                  />
                ]
              }/>,


              <Card 
                titulo='Simulador de Investimentos' 
                questionNumber='8' 
                question={[
                  <QuestionInput question='qual seu nome?'/>, 
                  <QuestionCheck 
                    question='qual seu sexo?' 
                    optionsnumber={4} 
                    options= {['dormir', 'comer', 'beber', 'sentar']}
                  />, 
                  <QuestionInput 
                    question='qual seu nome?' 
                  />
                ]
              }/>,


              <Card 
                titulo='Simulador de Investimentos' 
                questionNumber='9' 
                question={[
                  <QuestionInput question='qual seu nome?'/>, 
                  <QuestionCheck 
                    question='qual seu sexo?' 
                    optionsnumber={4} 
                    options= {['dormir', 'comer', 'beber', 'sentar']}
                  />, 
                  <QuestionInput 
                    question='qual seu nome?' 
                  />
                ]
              }/>,


              <Card 
                titulo='Simulador de Investimentos' 
                questionNumber='10' 
                question={[
                  <QuestionInput question='qual seu nome?'/>, 
                  <QuestionCheck 
                    question='qual seu sexo?' 
                    optionsnumber={4} 
                    options= {['dormir', 'comer', 'beber', 'sentar']}
                  />, 
                  <QuestionInput 
                    question='qual seu nome?' 
                  />
                ]
              }/>,
            ]

function App() {
  const count = useSelector(selectquestionNumber);
  return (
    <div className="App">
      {cards[count]}
    </div>
  );
}

export default App;
