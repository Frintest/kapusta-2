import React, { Component, Fragment } from "react";
import { FieldContext } from "../FileldContext.jsx";

import Menu from "./Menu/Menu.jsx";
import Plant from "./Plant/Plant.jsx";

import textureDirt from "../assets/field-dirt.png";

import "./Cell.scss";

export default class Cell extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textureActive: this.props.other.src,
			plantIsActive: false,
			textureProduct: null,
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

	getTextureProduct = (src) => {
		this.setState({
			textureProduct: src
		})
	}

	render() {
		const { other, isActive, index } = this.props,
				{ modificators, isBreak, alt } = other,
				{ textureActive, plantIsActive, textureProduct } = this.state;
				
		const orientation = (modificators && modificators.orientation);
	
		const active = (isActive && isBreak);

		return (
			<FieldContext.Consumer>
				{(handleActive) => (
					<Fragment>
						<Plant isActiveClass={plantIsActive ? " plant_active" : ""}
							closePlant={(src) => {
								this.handlePlantBtn();
								this.getTextureProduct(src);
							}} />
						
						<div className="field__cell-wrapper">
							<Menu isActive={active}
								handleShovelBtn={this.handleShovelBtn}
								handlePlantBtn={this.handlePlantBtn} />

							<div className={"field__cell" + (active ? " field__cell_active" : "")} onClick={() => handleActive(index)}>
								<img className={"field__texture" + (orientation === "horizontal" ? " field__texture_orientation_horizontal" : "")}
									src={textureActive}
									alt={alt} />
								<img src={textureProduct} alt="" className="field__texture-product" />
							</div>
						</div>
					</Fragment>
				)}
			</FieldContext.Consumer>
		)
	}
}