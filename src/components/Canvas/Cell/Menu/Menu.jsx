import React, { Component } from "react";

import shovel from "./MenuDB/shovel.svg";
import exit from "./MenuDB/exit.svg";

import "./Menu.scss";

const menuDB = [
	{
		icon: shovel,
		alt: "лопата",
		exit: true,
	},
	{
		icon: exit,
		alt: "закрыть",
		exit: true,
	},
];

export default class Menu extends Component {
	render() {
		return (
			<div className={"canvas__cell-menu" + (isActiveProps ? " canvas__cell-menu_active" : "")}>
				<ul className="canvas__cell-list">
					{
						menuDB.map(({ icon, alt, exit }) => {
							return (
								<li className="canvas__cell-item" 
									key={alt}
									tabIndex={0}>
									<img src={icon} alt={alt} className="canvas__cell-icon" width={18} height={18} />
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}