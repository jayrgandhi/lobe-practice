import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ModelLayer from './ModelLayer.js';
import { LayersEnum } from './App.js';

export default class ModelLayerList extends PureComponent {
	processLayers(layer, i) {

	}

	render() {
		return (
			<div className="model-layer-list-container">
				{
					this.props.modelLayers.map((layer, i) => {
						if (layer.type === LayersEnum.CONV) {
							return (
								<ModelLayer
									key={layer.type + '_' + i}
									index={i+1}
									layer={layer}
								/>
							);
						} else {
							return <h1>POOOO</h1>;
						}
					})
				}
			</div>
		);
	}
}

ModelLayerList.propTypes = {
	modelLayers: PropTypes.array
}