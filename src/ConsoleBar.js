import React, { Component } from 'react';
import './Console.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/fontawesome-free-solid'

class ConsoleBar extends Component {
    render() {
        return (
        	<div>
	        	<div className="Bar-controls">
	        		<span className="Space"></span>
		            <FontAwesomeIcon color="#fc625d" icon={faCircle} />
                	<span className="Space"></span>
		            <FontAwesomeIcon color="#fdbd41" icon={faCircle} />
                	<span className="Space"></span>
		            <FontAwesomeIcon color="#34c84a" icon={faCircle} />
                	<span className="Space"></span>
            	</div>
	            <div className="Console-bar">
	                <span className="Console-bar-title">
	                	1. bash
	                </span>
	            </div>
            </div>
        );
    }
}
export default ConsoleBar;