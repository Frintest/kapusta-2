import React, { Component } from "react";

import Menu from "./Menu/Menu.jsx";

import "./Cell.scss";

export default class Cell extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { other, handleClick, isActive, index } = this.props,
				{ modificators, isBreak, src, alt } = other;
				
		const orientation = (modificators && modificators.orientation);
	
		const active = (isActive && isBreak);

		return (
			<div className="field__cell-wrapper">
				<Menu isActive={active} />

				<div className="field__cell" onClick={() => handleClick(index)}>
					<img className={"canvas__texture" + (orientation === "horizontal" ? " field__texture_orientation_horizontal" : "")}
						src={src}
						alt={alt} />
				</div>
			</div>
		)
	}
}