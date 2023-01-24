import React, { Component } from "react";
// import { FieldContext } from "../FileldContext.jsx";

// import Menu from "./Menu/Menu.jsx";
// import Plant from "./Plant/Plant.jsx";

import "./Cell.scss";

export default class Cell extends Component {
	render() {
		const { cell, index, setActiveCell } = this.props,
				{ src, alt, modificators } = cell;

		return (
			<div className="field__cell-wrapper">
				<div
					className={"field__cell" + (modificators && modificators.active ? " field__cell_active" : "")}
					onClick={() => setActiveCell(index)}
				>
					<img
						className={"field__texture" + (modificators && modificators.orientation === "horizontal" ? " field__texture_orientation_horizontal" : "")}
						src={src}
						alt={alt}
					/>
				</div>
			</div>
		);
	}
}