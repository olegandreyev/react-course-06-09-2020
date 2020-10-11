const { createStore, combineReducers } = require('redux');

// COUNTER LOGIC
const initialState = 0; // initial state

const INCREMENT = 'INCREMENT'; // action type
const DECREMENT = 'DECREMENT';


const increment = () => ({      // action creator
  type: INCREMENT
});
const decrement = () => ({
  type: DECREMENT
});

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: return state + 1;
    case DECREMENT: return state - 1;
    default: return state;
  }
};

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';

const addTodo = title => ({
  type: ADD_TODO,
  payload: {
    title
  }
});

const removeTodo = todoId => ({
  type: REMOVE_TODO,
  payload: todoId
});

const completeTodo = todoId => ({
  type: COMPLETE_TODO,
  payload: todoId
});

// TODO LOGIC

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: return [...state, {
      id: Math.random() + '',
      title: action.payload.title,
      completed: false
    }];
    case REMOVE_TODO: return state.filter(todoItem => todoItem.id !== action.payload);
    case COMPLETE_TODO: return state.map(todoItem =>
      todoItem.id === action.payload ? {...todoItem, completed: true}: todoItem);

    default: return state;
  }
};

const store = createStore(combineReducers({
  todo: combineReducers({
    list: todoReducer
  }),
  counter: counterReducer
}));

store.subscribe(() => {
  console.log('-----------------');
  console.log(store.getState(), 'current state');
  console.log('-----------------');
});

console.log('ADD TODO TEST');

store.dispatch(addTodo('Walk the dog.'));
store.dispatch(addTodo('Wash dishes'));
store.dispatch(addTodo('Выспаться.'));

console.log('COMPLETE TODO TEST');
const [firstTodo, secondTodo] = store.getState().todo.list;
store.dispatch(completeTodo(firstTodo.id));
store.dispatch(completeTodo(secondTodo.id));

console.log('REMOVE TODO TEST');
store.dispatch(removeTodo(firstTodo.id));
store.dispatch(removeTodo(secondTodo.id));

console.log('COUNTER TEST');
store.dispatch(increment()); // 1
store.dispatch(increment()); // 2
store.dispatch(increment()); // 3
store.dispatch(decrement()); // 2



