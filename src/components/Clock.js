import React, { Component } from 'react';

class Clock extends Component {
    state = {
        date: new Date()
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ date: new Date() })
        },1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    
    render() {
        return (
            <div>
                {this.state.date.toString()}
            </div>
        );
    }
}

export default Clock;
