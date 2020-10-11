import React from 'react';
import { connect } from 'react-redux'
import { decrement, increment } from "../redux/actions/counter";

function Counter({ count, increment, decrement }) {

  return (
    <div>
      COUNT = {count}
      <br/><br/>
      <button onClick={() => increment()}>Increment +</button>
      <br/>
      <br/>
      <button onClick={() => decrement()}>Decrement -</button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.counter
});

const mapDispatchToProps = {
  increment,
  decrement
};



const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default ConnectedCounter;
