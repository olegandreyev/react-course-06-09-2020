import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { Container } from "semantic-ui-react";
import { ExampleUNoUseState, ExampleUseState } from "./tasks/class-works/cw3/ExampleUseState";
import ThemeContext from "./tasks/class-works/cw3/context/ThemeContext";
import MouseTracker from "./tasks/class-works/cw3/CustomHooks/MouseTracker";
import UseCallbackExample from "./tasks/class-works/cw4/useCallback/Example";
import Blog from "./tasks/home-works/dz4/blog-v2/Blog";
import ReduxApp from "./tasks/class-works/cw5/react-redux/ReduxApp";



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    }
  }

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={theme}>
        <Container className='page'>
          <ReduxApp />
        </Container>
      </ThemeContext.Provider>
    )
  }
}

export default App;
