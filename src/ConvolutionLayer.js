import React from 'react-dom';

export default class ConvolutionLayer extends ModelLayer {
	render() {
		return (
			{super.render()}
			<div className="model-layer-container">
				<span className="title">{`Layer ${this.props.index}: ${this.props.layer.type}`}</span><br></br>
        		<span className="info">Click here for more info</span>
        	</div>
		);
	}
}