import React, { Component } from "react";

import Menu from "./Menu/Menu.jsx";

import textureDirt from "../assets/textures/dirt.png";

import "./Cell.scss";

export default class CanvasCell extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { other, handleClick, isActive, index } = this.props,
				{ modificators, isBreak, src, alt } = other;
				
		const orientation = (modificators && modificators.orientation);
	
		const active = (isActive && isBreak);

		return (
			<div className="canvas__cell-wrapper">
				<Menu isActive={active} />

				<div className="canvas__cell" onClick={() => handleClick(index)}>
					<img className={"canvas__texture" + (orientation === "horizontal" ? " canvas__texture_orientation_horizontal" : "")}
						src={active ? textureDirt : src}
						alt={alt} />
				</div>
			</div>
		)
	}
}