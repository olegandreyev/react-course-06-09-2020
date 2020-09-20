import React, { useState } from 'react';
import './styles.css';
import ThemeContext from "./context/ThemeContext";

export class ExampleUNoUseState extends React.Component {

  static contextType = ThemeContext;

  state = {
    count: 0
  };

  increment = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  };

  render() {
    const { count } = this.state;
    const theme = this.context;
    return (
      <div className='counter' style={{
        backgroundColor: theme === 'light' ? 'whitesmoke' : 'black',
        color: theme === 'light' ? 'black' : 'white'
      }}>
        Clicks: {count}<button onClick={this.increment}>+</button>
      </div>
    )
  }
}

export function ExampleUseState({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  const addUser = () => {
    setUsers([...users, name]);
    setName('');
  };

  return (
    <div className='counter'>
      Clicks: {count}<button onClick={() => setCount(count + 1)}>+</button>
      <br/><br/>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={addUser}>Add user</button>
      <ul>
        {users.map(u => <li>{u}</li>)}
      </ul>
    </div>
  )
}
