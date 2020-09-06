import React, { Component } from 'react';
import './App.css';
import User from './components/User';
import Clock from './components/Clock';
import TodoList from './components/TodoList';


class App extends Component {

  state = {
    users: ['Ivan', 'Olga', 'Irina', 'Igor'],
    newUser: '',
    isClockDisplayed: false
  }

  addUser = () => {
    const { users, newUser } = this.state;
    this.setState({
      users: [...users, newUser],
      newUser: ''
    })
  }

  onChange = (e) => {
    this.setState({
      newUser: e.target.value
    })
  }

  removeUser = (removedIndex) => {
    const { users } = this.state;
    this.setState({
      users: users.filter((user, i) => i !== removedIndex)
    })
  }

  updateUser = (updatedUser, updatedIndex) => {
    const { users } = this.state;
    this.setState({
      users: users.map((user, i) => i === updatedIndex ? updatedUser : user)
    })
  }

  
  render() {

    const { users, newUser, isClockDisplayed } = this.state;
    
    return (
      <div>
        <h1>Hello</h1>
        <h1>Date:</h1>
        <input
          type="checkbox"
          checked={isClockDisplayed}
          onChange={() => this.setState({ isClockDisplayed: !isClockDisplayed })}
          />
        {isClockDisplayed && <Clock /> }
        <ul>
          {
            users.map((name, i) =>
              <User
                name={name}
                position={i}
                key={i}
                onRemoveUser={this.removeUser}
                onUpdateUser={this.updateUser}
              />
            )
          }
        </ul>
        <input value={newUser} onChange={this.onChange} type="text"/>
        <button onClick={this.addUser}>Add User</button>
        <br/><br/>
        <TodoList />
      </div>
    )

  }
}

export default App;
