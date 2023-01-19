import React, { Component } from "react";
import { FieldContext } from "../../FileldContext.jsx";

import shovel from "./MenuDB/shovel.svg";
import exit from "./MenuDB/exit.svg";

import "./Menu.scss";

const menu = [
	{
		icon: shovel,
		alt: "лопата",
		exit: false,
	},
	{
		icon: exit,
		alt: "закрыть",
		exit: true,
	},
];

export default class Menu extends Component {
	render() {
		const { isActive } = this.props;
		return (
			<FieldContext.Consumer>
				{(handleActive) => (
					<div className={"field__cell-menu" + (isActive ? " field__cell-menu_active" : "")}>
						<ul className="field__cell-list">
							{
								menu.map(({ icon, alt, exit }) => {
									return (
										<li className="field__cell-item"
											onClick={exit ? () => handleActive(null) : null}
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