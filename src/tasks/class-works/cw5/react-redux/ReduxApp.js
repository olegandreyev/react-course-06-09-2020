import React from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import Counter from "./components/Counter";

const store = createStore();

function ReduxApp() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default ReduxApp;
