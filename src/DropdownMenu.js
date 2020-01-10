import React, { PureComponent } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import './DropdownMenu.css'
import PropTypes from 'prop-types';
import { LayersEnum } from './App.js';

export default class DropdownMenu extends PureComponent {
	render() {
		return (
			<DropdownButton className="dropdown-item-button" title="Add Layer" onSelect={this.props.handleDropdownSelect}>
  				<Dropdown.Item as="button" eventKey={LayersEnum.CONV}>Convolution Layer</Dropdown.Item>
  				<Dropdown.Item as="button" eventKey={LayersEnum.BATCH}>Batch Normalization</Dropdown.Item>
  				<Dropdown.Item as="button" eventKey={LayersEnum.MAXPOOL}>Max Pooling</Dropdown.Item>
  				<Dropdown.Item as="button" eventKey={LayersEnum.DROPOUT}>Dropout</Dropdown.Item>
			</DropdownButton>
		);
	}
}

DropdownMenu.propTypes = {
	handleDropdownSelect: PropTypes.func
}