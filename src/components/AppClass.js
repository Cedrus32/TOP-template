import React, { Component } from 'react';
import MyHeader from './HeaderClass';
import MyButton from './ButtonClass';

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
                <MyHeader title="React" message="Hello, world!"/>
                <MyButton onButtonClicked={this.onClickBtn} />
            </div>
        )
    }
}

export default MyApp;
