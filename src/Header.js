import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <div className="component-header-container">
        <header className="component-header">
          <img
            src="https://lobe.ai/static/logo.9ed96b39.png"
            className="component-header-image"
            width="105"
            height="40"
            alt=""
          />
        </header>
      </div>
    );
  }
}