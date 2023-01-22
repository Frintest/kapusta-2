import React, { Component, Fragment } from "react";
import { FieldContext } from "../FileldContext.jsx";

import Menu from "./Menu/Menu.jsx";
// import Plant from "./Plant/Plant.jsx";

import "./Cell.scss";

export default class Cell extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	textureActive: this.props.other.src,
		// 	plantIsActive: false,
		// 	textureProduct: null,
		// }
	}

	// handlePlantBtn = () => {
	// 	this.setState(({ plantIsActive }) => ({
	// 		plantIsActive: !plantIsActive
	// 	}))
	// }

	// getTextureProduct = (src) => {
	// 	this.setState({
	// 		textureProduct: src
	// 	})
	// }

	render() {
		const { cell, index } = this.props,
				{ modificators, isBreak, src, alt } = cell,
				{  orientation, active } = modificators,
				// { textureActive, plantIsActive, textureProduct } = this.state,
				isActive = (active && isBreak);

		return (
			<FieldContext.Consumer>
				{({ field }) => (
					<Fragment>
						{/* <Plant isActiveClass={plantIsActive ? " plant_active" : ""}
							closePlant={(src) => {
								this.handlePlantBtn();
								this.getTextureProduct(src);
							}} /> */}
						
						<div className="field__cell-wrapper">
							<Menu index={index} isActive={isActive} />

							<div className={"field__cell" + (isActive ? " field__cell_active" : "")}
								onClick={() => field(index, true)}>
								<img className={"field__texture" + (orientation === "horizontal" ? " field__texture_orientation_horizontal" : "")}
									src={src}
									alt={alt} />
								{/* <img src={src} alt="" className="field__texture-product" /> */}
							</div>
						</div>
					</Fragment>
				)}
			</FieldContext.Consumer>
		)
	}
}