import React, { Component } from 'react';
import './Console.css';

class ConsoleBody extends Component {
    render() {
        return (
            <div className="Console-body">
                <div className="Console-history">
                    Last login: Fri Mar  9 13:40:47 on ttys000
                </div>
                <div className="Console-input">
                    <span className="Console-input-host">Computer:~ ana.castro$</span>
                    <div className="Console-input-text" contentEditable></div>
                    <span className="Console-input-cursor"></span>
                </div>
            </div>
        );
    }
}
export default ConsoleBody;