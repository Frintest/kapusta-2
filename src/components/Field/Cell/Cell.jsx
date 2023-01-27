import React, { Component, Fragment } from "react";
import { FieldContext } from "../FileldContext.jsx";

import Menu from "./Menu/Menu.jsx";
import Plant from "./Plant/Plant.jsx";

import "./Cell.scss";

export default class Cell extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActivePlant: false,
		};
	}

	handleActivePlant = (isActive) => {
		this.setState({isActivePlant: isActive});
	}

	render() {
		const { cell, index } = this.props,
				{ src, alt, modificators } = cell,
				{ isActivePlant } = this.state;

		return (
			<FieldContext.Consumer>
				{({ setActiveCell })=> (
					<Fragment>
						{isActivePlant ? <Plant index={index} handleActivePlant={this.handleActivePlant} /> : null}

						<div className="field__cell-wrapper">
							<Menu
								isActive={modificators.active}
								index={index}
								handleActivePlant={this.handleActivePlant}
								src={src}
							/>
							
							<div
								className={"field__cell" + (modificators.active ? " field__cell_active" : "")}
								onClick={() => setActiveCell(index)}
							>
								<img
									className={"field__texture" + (modificators.orientation === "horizontal" ? " field__texture_orientation_horizontal" : "")}
									src={src}
									alt={alt}
								/>
								<img src={modificators.culture ? modificators.culture.texture : null} className="field__texture-product" />
							</div>
						</div>
					</Fragment>
				)}
			</FieldContext.Consumer>
		);
	}
}