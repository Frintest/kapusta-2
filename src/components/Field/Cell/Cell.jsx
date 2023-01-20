import React, { Component } from "react";
import { FieldContext } from "../FileldContext.jsx";

import Menu from "./Menu/Menu.jsx";

import "./Cell.scss";

export default class Cell extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textureActive: this.props.other.src
		}
	}

	handleShovelBtn = (texture) => {
		this.setState({
			textureActive: texture
		})
	}

	render() {
		const { other, isActive, index } = this.props,
				{ modificators, isBreak, alt } = other,
				{ textureActive } = this.state;
				
		const orientation = (modificators && modificators.orientation);
	
		const active = (isActive && isBreak);

		return (
			<FieldContext.Consumer>
				{(handleActive) => (
					<div className="field__cell-wrapper">
						<Menu isActive={active} handleShovelBtn={this.handleShovelBtn} />

						<div className={"field__cell" + (active ? " field__cell_active" : "")}
							onClick={() => handleActive(index)}>
							<img className={"canvas__texture" + (orientation === "horizontal" ? " field__texture_orientation_horizontal" : "")}
								src={textureActive}
								alt={alt} />
						</div>
					</div>
				)}
			</FieldContext.Consumer>
		)
	}
}