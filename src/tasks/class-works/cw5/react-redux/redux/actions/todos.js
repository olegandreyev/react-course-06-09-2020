export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = title => ({
  type: ADD_TODO,
  payload: {
    title
  }
});

export const removeTodo = todoId => ({
  type: REMOVE_TODO,
  payload: todoId
});

export const toggleTodo = (todoId, completed) => ({
  type: TOGGLE_TODO,
  payload: {
    todoId,
    completed
  }
});
