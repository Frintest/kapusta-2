import React, { Component } from "react";

import textureGrass from "./assets/textures/grass3.png";
import textureDirt from "./assets/textures/dirt.png";

import "./CanvasCell.scss";

export default class CanvasCell extends Component {
	constructor() {
		super();
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
		const active = isActive === true;

		return (
			<div onClick={() => {this.handleActive()}}
				className={"canvas__cell"}>
				<img src={active ? textureDirt : textureGrass}
					alt={active ? "земля" : "трава"}
					className="canvas__texture"/>
			</div>
		)
	}
}