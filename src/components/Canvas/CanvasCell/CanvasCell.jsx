import React, { Component } from "react";

import textureDirt from "../assets/textures/dirt.png";

import "./CanvasCell.scss";

export default class CanvasCell extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		}
	}

	handleActive = () => {
		this.setState(({ isActive }) => ({
			isActive: !isActive
		}))
	}

	render() {
		const { isActive } = this.state;
		const { modificators, src, alt } = this.props;
		const active = isActive === true;

		return (
			<div onClick={() => {this.handleActive()}}
				className="canvas__cell">
				<img className={"canvas__texture" + ((modificators && modificators.orientation) === "horizontal" ? " canvas__texture_horizontal" : '')}
					src={active ? textureDirt : src}
					alt={alt} />
			</div>
		)
	}
}