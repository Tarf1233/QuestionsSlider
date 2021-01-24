import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import SetQuestions from '../features/components/ContactForm/Card/SetQuestions'

export default configureStore({
  reducer: {
    counter: counterReducer,
    questions: SetQuestions
  },
});
