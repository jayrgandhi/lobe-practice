import React, { PureComponent } from 'react';
import './App.css';
//import logo from './logo.svg';
import Header from './Header.js';
import DropdownMenu from './DropdownMenu.js';
import ModelLayerList from './ModelLayerList.js';

export const LayersEnum = Object.freeze({
  CONV: "Convolution",
  BATCH: "Batch-Normalization",
  MAXPOOL: "Max-Pooling",
  DROPOUT: "Dropout"
});

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modelLayers: []
    };

    this.addModelLayer = this.addModelLayer.bind(this);
  }

  addModelLayer(layerType) {
    var newLayer = {
      type: layerType
    };

    this.setState({
      modelLayers: [...this.state.modelLayers, newLayer]
    });
  }

  updateModelLayer(layerIndex, values) {
    return;
  }

  render() {
    return (
      <div>
        <Header className="app-header"/>
        <DropdownMenu handleDropdownSelect={this.addModelLayer} />
        <br></br>
        <ModelLayerList modelLayers={this.state.modelLayers} />
      </div>
    );
  }
}
