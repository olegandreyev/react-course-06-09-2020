import todosReducer from './todos';
import counterReducer from './counter';
import filtersReducer from './filters';
import { combineReducers } from 'redux';

export default combineReducers({
  todos: combineReducers({
    list: todosReducer,
    filters: filtersReducer
  }),
  counter: counterReducer
})

