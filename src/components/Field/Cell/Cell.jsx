import React, { Component, Fragment } from "react";
import { FieldContext } from "../FileldContext.jsx";

import Menu from "./Menu/Menu.jsx";
import Plant from "./Plant/Plant.jsx";

import textureDirt from "../assets/textures/dirt.png";

import "./Cell.scss";

export default class Cell extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textureActive: this.props.other.src,
			plantIsActive: false
		}
	}

	handleShovelBtn = () => {
		this.setState({
			textureActive: textureDirt
		})
	}

	handlePlantBtn = () => {
		this.setState(({ plantIsActive }) => ({
			plantIsActive: !plantIsActive
		}))
	}

	render() {
		const { other, isActive, index } = this.props,
				{ modificators, isBreak, alt } = other,
				{ textureActive, plantIsActive } = this.state;
				
		const orientation = (modificators && modificators.orientation);
	
		const active = (isActive && isBreak);

		return (
			<FieldContext.Consumer>
				{(handleActive) => (
					<Fragment>
						{plantIsActive ? <Plant /> : null}
						
						<div className="field__cell-wrapper">
							<Menu isActive={active}
								handleShovelBtn={this.handleShovelBtn}
								handlePlantBtn={this.handlePlantBtn} />

							<div className={"field__cell" + (active ? " field__cell_active" : "")}
								onClick={() => handleActive(index)}>
								<img className={"canvas__texture" + (orientation === "horizontal" ? " field__texture_orientation_horizontal" : "")}
									src={textureActive}
									alt={alt} />
							</div>
						</div>
					</Fragment>
				)}
			</FieldContext.Consumer>
		)
	}
}