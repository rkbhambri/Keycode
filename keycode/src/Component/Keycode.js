import React, { Component } from 'react';
import './Keycode.css';

class KeyCode extends Component {

	state = {
		keyCode: 'PRESS KEY'
	};

	componentDidMount() {
		document.addEventListener('keydown', this.setKeyCode);
	};

	setKeyCode = (event) => {
		this.setState({
			keyCode: event.keyCode,
			key: event.key,
			which: event.which,
			code: event.code
		});
	};

	render() {
		return (
			<div className="layout col-md-10 offset-1">
				<div className="keycode text-center">{this.state.keyCode}</div>
				{
					this.state.keyCode !== 'PRESS KEY' &&
					<div className="event-key-wrapper row text-center">
						<div className="event-key col-md-3 m-3">
							<div className="title">event.key</div><hr />
							<div className="key">{this.state.key}</div>
						</div>
						<div className="event-key col-md-3 m-3">
							<div className="title" >event.which</div><hr />
							<div className="key">{this.state.which}</div>
						</div>
						<div className="event-key col-md-3 m-3">
							<div className="title">event.code</div><hr />
							<div className="key">{this.state.code}</div>
						</div>
					</div>
				}
			</div>
		);
	};
};

export default KeyCode;
