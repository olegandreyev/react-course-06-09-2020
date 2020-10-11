import React from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import Counter from "./components/Counter";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

const store = createStore();

function ReduxApp() {
  return (
    <Provider store={store}>
      <Counter />
      <br/><br/>
      <AddTodoForm />
      <TodoFilter />
      <TodoList />
    </Provider>
  );
}

export default ReduxApp;
