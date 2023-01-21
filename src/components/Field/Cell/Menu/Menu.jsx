import React, { Component } from "react";
import { FieldContext } from "../../FileldContext.jsx";

import shovel from "./assets/field-cell-menu-shovel.svg";
import plant from "./assets/field-cell-menu-plant.svg";
import exit from "./assets/field-cell-menu-exit.svg";

import "./Menu.scss";

const menu_db = [
	{
		name: shovel,
		icon: shovel,
		alt: "лопата",
		exit: true,
	},
	{
		name: plant,
		icon: plant,
		alt: "посадить",
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
		const { isActive, handleShovelBtn, handlePlantBtn } = this.props;

		return (
			<FieldContext.Consumer>
				{(handleActive) => (
					<div className={"field__cell-menu" + (isActive ? " field__cell-menu_active" : "")}>
						<ul className="field__cell-list">
							{
								menu_db.map(({ name, icon, alt, exit }) => {
									return (
										<li className="field__cell-item"
											onClick={() => {
												name === shovel ? handleShovelBtn() : null;
												name === plant ? handlePlantBtn() : null;
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