import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import SimpleExample from "./tasks/class-works/cw1/SimpleExample";
import Week1 from "./tasks/home-works/dz1/Week1";
import CompositionExample from "./tasks/class-works/cw2/composition/CompositionExample";


class App extends Component {

  render() {
    return (
      <Week1 />
    )
  }
}

export default App;
