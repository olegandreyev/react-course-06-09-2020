import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actions/todos";


export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: return [...state, {
      id: Math.random() + '',
      title: action.payload.title,
      completed: false
    }];
    case REMOVE_TODO: return state.filter(todoItem => todoItem.id !== action.payload);
    case TOGGLE_TODO: return state.map(todoItem =>
      todoItem.id === action.payload.todoId ? {...todoItem, completed: !action.payload.completed}: todoItem);

    default: return state;
  }
};
