import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counter';

export default () => {
  return createStore(combineReducers({
    counter: counterReducer
  }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
