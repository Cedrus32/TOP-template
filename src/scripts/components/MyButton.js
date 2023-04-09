import React, { Component } from 'react';

class MyButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }

    render() {
        const { onClick, children } = { ...this.props };
        return (
            <button onClick={onClick}>{children}</button>
        )
    }
}

class CountButton extends MyButton {
    constructor(props) {
        super(props)

        this.countUp = this.countUp.bind(this); // must bind context when passing methods to other components
    }

    countUp() {
        this.setState({
            count: this.state.count += 1,
        })
        console.log(this.state.count);
    }

    render() {
        return (
            <MyButton onClick={this.countUp}>
                {'I count up!'}
            </MyButton>
        )
    }
}

export default CountButton;
