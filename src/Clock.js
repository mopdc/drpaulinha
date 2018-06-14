import React, { Component } from 'react';
import './System.css';


class Clock extends Component {
	constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString()
      };
	}  

	tick() {
	  this.setState({
	    date: new Date().toLocaleString()
	  });
	}

	componentDidMount() {
	  this.intervalID = setInterval(
	    () => this.tick(),
	    1000
	  );
	}

	componentWillUnmount() {
	  clearInterval(this.intervalID);
	}
	
    render() {
        return (
            <div>
            	The time is {this.state.time}.
            </div>
        );
    }
}
export default Clock;