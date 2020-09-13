import React, { Component, createRef } from 'react';

class AutofocusInput extends Component {

  constructor(props) {
    super(props);
    this.inputRef = createRef(); // current = null
  }

  onInputClick = () => {
    alert(1)
  };

  componentDidMount() {
    this.inputRef.current.focus();
    this.inputRef.current.addEventListener('click', this.onInputClick)
  }

  componentWillUnmount() {
    this.inputRef.current.removeEventListener('click', this.onInputClick)
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" onClick={e => e.stopPropagation()} />
      </div>
    );
  }
}

export default AutofocusInput;
