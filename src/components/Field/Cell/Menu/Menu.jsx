import React, { Component } from "react";
import { FieldContext } from "../../FileldContext.jsx";

import digUp from "./assets/field-cell-menu-dig-up.svg";
import plant from "./assets/field-cell-menu-plant.svg";
import exit from "./assets/field-cell-menu-exit.svg";

import textureGrass from "../../assets/field-grass.png";

import "./Menu.scss";


const menu_db = [
	{
		name: "dig-up",
		icon: digUp,
		alt: "вскопать",
	},
	{
		name: "plant",
		icon: plant,
		alt: "посадить",
	},
	{
		name: "exit",
		icon: exit,
		alt: "закрыть",
	},
];

export default class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { isActive, index, handleActivePlant, src } = this.props;

		return (
			<FieldContext.Consumer>
				{({ deleteActiveCell, digUp }) => (
					<div className={"field__cell-menu" + (isActive ? " field__cell-menu_active" : "")}>
						<ul className="field__cell-list">
							{
								menu_db.map(({ name, icon, alt }) => {
									return (
												((name === "plant") && (src === textureGrass)) ||
											 	((name === "dig-up") && (src !== textureGrass))
											 ) ? null :
										<li
											className="field__cell-item"
											onClick={() => {
												name === "dig-up" ? digUp(index) : null;
												name === "plant" ? handleActivePlant(true) : handleActivePlant(false);
												deleteActiveCell(index);
											}}
											key={name}
											tabIndex={0}
										>
											<img src={icon} alt={alt} className="field__cell-icon" width={18} height={18} />
										</li>
								})
							}
						</ul>
					</div>
				)}
			</FieldContext.Consumer>
		);
	}
}