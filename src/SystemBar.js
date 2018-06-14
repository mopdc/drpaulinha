import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faSmile, faQuestionCircle, faBicycle, faAlignLeft, faBatteryFull, faVolumeUp ,faWifi, faSearch} from '@fortawesome/fontawesome-free-solid'
import './System.css';

class SystemBar extends Component {
    render() {
        return (
            <div className="System-bar">
	            <div className="System-bar-title Bar-controls">
		            { <FontAwesomeIcon icon={faQuestionCircle} /> }
		            <span className="Space"></span>
		            <b>iTerm</b>
		            <span className="Space"></span>
		            Shell
		            <span className="Space"></span>
		            Window
		            <span className="Space"></span>
		            Help
		            <span className="Space"></span>
		        </div>
	            <div className="System-bar-title Bar-controls System-bar-title-right">
		            <span className="Space"></span>
		            <FontAwesomeIcon icon={faWifi} />
		            <span className="Space"></span>
		            <FontAwesomeIcon icon={faBatteryFull} />
		            <span className="Space"></span>
		            <FontAwesomeIcon icon={faVolumeUp} />
		            <span className="Space"></span>
		            Wed 21:31
		            {this.formatedDate}
		            <span className="Space"></span>
		            Ana Carolina Castro
		            <span className="Space"></span>
		            <FontAwesomeIcon icon={faSearch} />
		            <span className="Space"></span>
		            <FontAwesomeIcon icon={faAlignLeft} />
	            </div>
            </div>
        );
    }
}
export default SystemBar;