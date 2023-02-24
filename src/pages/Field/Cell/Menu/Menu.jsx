import React, { Component } from "react";
import { FieldContext } from "../../FileldContext.jsx";

import digUp from "./assets/field-cell-menu-dig-up.svg";
import bury from "./assets/field-cell-menu-bury.svg";
import plant from "./assets/field-cell-menu-plant.svg";
import exit from "../../../../assets/interface/btn-exit.svg";

import textureGrass from "../../assets/field-grass.png";

import "./Menu.scss";


const menu_db = [
	{
		name: "dig-up",
		icon: digUp,
		alt: "вскопать",
	},
	{
		name: "bury",
		icon: bury,
		alt: "закопать",
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
				{({ deleteActiveCell, digUp, bury }) => (
					<div className={"field__cell-menu" + (isActive ? " field__cell-menu_active" : "")}>
						<ul className="field__cell-list">
							{
								menu_db.map(({ name, icon, alt }) => {
									return (
												((name === "plant") && (src === textureGrass)) || // если plant не вскопано
											 	((name === "dig-up") && (src !== textureGrass)) || // если dig-up и вскопано
												((name === "bury") && (src === textureGrass)) // если bury и не вскопано
											 ) ? null :
										<li
											className="field__cell-item"
											onClick={() => {
												name === "dig-up" ? digUp(index) : null;
												name === "plant" ? handleActivePlant(true) : handleActivePlant(false);
												name === "bury" ? bury(index) : null;
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