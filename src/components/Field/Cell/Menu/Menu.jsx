import React, { Component } from "react";
import { FieldContext } from "../../FileldContext.jsx";

import shovel from "./MenuDB/shovel.svg";
import exit from "./MenuDB/exit.svg";
import textureDirt from "../../assets/textures/dirt.png";

import "./Menu.scss";

const menu = [
	{
		name: shovel,
		icon: shovel,
		alt: "лопата",
		exit: true,
	},
	{
		name: exit,
		icon: exit,
		alt: "закрыть",
		exit: true,
	},
];

export default class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { isActive, handleShovelBtn } = this.props;

		return (
			<FieldContext.Consumer>
				{(handleActive) => (
					<div className={"field__cell-menu" + (isActive ? " field__cell-menu_active" : "")}>
						<ul className="field__cell-list">
							{
								menu.map(({ name, icon, alt, exit }) => {
									return (
										<li className="field__cell-item"
											onClick={() => {
												name === shovel ? handleShovelBtn(textureDirt) : null;
												exit ? handleActive(null) : null;
											}}
											key={alt}
											tabIndex={0}>
											<img src={icon} alt={alt} className="field__cell-icon" width={18} height={18} />
										</li>
									)
								})
							}
						</ul>
					</div>
				)}
			</FieldContext.Consumer>
		)
	}
}