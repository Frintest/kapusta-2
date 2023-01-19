import React, { Component } from "react";

import Menu from "./Menu/Menu.jsx";

import textureDirt from "../assets/textures/dirt.png";

import "./Cell.scss";

export default class CanvasCell extends Component {
	changeIndex = () => {
		this.setState({
			index: null
		})
	}

	render() {
		const { other } = this.props,
				{ modificators, isBreak, src, alt } = other;
				
		const orientation = (modificators && modificators.orientation);
	
		const active = isBreak;

		return (
			<div className="canvas__cell-wrapper">
				{/* <Menu isActiveProps={active} handleClick={this.changeIndex} /> */}

				<div className="canvas__cell">
					<img className={"canvas__texture" + (orientation === "horizontal" ? " canvas__texture_orientation_horizontal" : "")}
						src={active ? src : src}
						alt={alt} />
				</div>
			</div>
		)
	}
}