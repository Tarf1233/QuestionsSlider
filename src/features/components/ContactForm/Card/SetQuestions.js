import { createSlice } from '@reduxjs/toolkit';

export const SetQuestion = createSlice({
  name: 'questions',
  initialState: {
    inputValue: '',
    questions: [],
    options: {},
    questionNumber: 0,
    inputIsValid: 0,
    asks: ['qual seu nome?', 'qual sua atividade principal?', 'qual seu sobrenome?', 'nome da empresa?', 'quanto pretende investir?', 'qual seu sexo?', 'nome da mae?', 'qual seu perfil de investidor?', 'Nome do pai?']

  },
  reducers: {
    setQuestionsValue: (state, action) => {
      state.questions.push(action.payload) 
    },
    setOption: (state, action) => {
      state.options = action.payload 
    },
    setQuestionNumber: (state, action) => {
      state.questionNumber = state.questionNumber + 1
    },
    setQuestionsValue2: (state, action) => {
      state.questions.push(state.options.options) 
    },
    setinputIsValid: (state, action) => {
      state.inputIsValid = action.payload
    },

    resset: (state, action) => {
      state.inputValue = ''
    },
  },
});

export const { setQuestionsValue, setOption, setQuestionsValue2, setQuestionNumber, setinputIsValid } = SetQuestion.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const setQuestionValues = question => dispatch => {
  
//     dispatch(setQuestionsValue(question));

// };

export const selectOption = state => state.questions.option;


export const selectAsks = state => state.questions.asks; 

export const selectquestionNumber = state => state.questions.questionNumber;


export const selectinputIsValid = state => state.questions.inputIsValid;



export default SetQuestion.reducer;
