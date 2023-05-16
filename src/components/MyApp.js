import React, { Component } from 'react';
import MyComponent from './MyComponent'
import MyButton from './MyButton';

class MyApp extends Component {
    constructor(props) {
        super(props)

        this.onClickBtn = this.onClickBtn.bind(this); // must bind context when passing methods to other components
    }

    onClickBtn() {
        console.log('Button has been clicked!');
    }
    
    render() {
        return (
            <div>
                <MyComponent title="React" message="Hello, world!"/>
                <button onClick={this.onClickBtn}>I console log!</button>
                <MyButton onButtonClicked={this.onClickBtn} />
            </div>
        )
    }
}

export default MyApp;
