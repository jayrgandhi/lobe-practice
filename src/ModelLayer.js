import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ModelLayer.css';

// import { LayersEnum } from './App.js';

// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.css';


export default class ModelLayer extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			layerSize: -1,
			kernelSize: -1,
			padding: '',
			activation: '',
		};
	}

	render() {
		return (
			<div>
				<div className="model-layer-container">
					<span className="title">{`Layer ${this.props.index}: ${this.props.layer.type}`}</span>
					
					<div className="layer-parameters">
						Layer Size: <input className="layer-inputs" onChange={this.handleChange} /> &nbsp;&nbsp;
						Kernel Size: <input className="layer-inputs" onChange={this.handleChange} /> &nbsp;&nbsp;
						Padding: <input className="layer-inputs" onChange={this.handleChange} /> &nbsp;&nbsp;
						Activation: <input className="layer-inputs" onChange={this.handleChange} />
					</div>
	        	</div>

	        	<br />
	        </div>
		)
	}
}

ModelLayer.propTypes = {
	index: PropTypes.number,
	layer: PropTypes.object
}
