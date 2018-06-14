import React, { Component } from 'react';
import './Console.css';
import ConsoleBar from './ConsoleBar.js';
import ConsoleBody from './ConsoleBody.js';


class Console extends Component {
    render() {
        return (
            <div className="Console Shadow">
                <ConsoleBar />
                <ConsoleBody />
            </div>
        );
    }
}
export default Console;