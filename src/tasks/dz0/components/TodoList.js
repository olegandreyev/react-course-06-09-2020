import React, { Component } from 'react';

class TodoList extends Component {
    state = {
        todos: [],
        loading: false
    }
    componentDidMount() {
        this.setState({ loading: true });
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(todos => this.setState({ todos, loading: false }))
    }
    render() {
        const { todos, loading } = this.state;
        if (loading) return <div>Loading...</div>
        return (
            <ul>
                {todos.map(todo => <li>{todo.title}</li>)}
            </ul>
        );
    }
}

export default TodoList;
