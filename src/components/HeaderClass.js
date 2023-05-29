import React, { Component } from 'react';

function MyHeader(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.message}</h1>
        </div>
    )
}

export default MyHeader;
