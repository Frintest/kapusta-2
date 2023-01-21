import React, { Component } from "react";

import garnet from "./assets/plantGarnet.png";
import lemon from "./assets/plantLemon.png";
import apricot from "./assets/plantApricot.png";
import plant from "./assets/plantPlant.svg";
import exit from "./assets/plantExit.svg";

import "./Plant.scss";

const plant_db = [
	{
		name: "garnet",
		src: garnet,
		alt: "Гранат",
		count: 3,
	},
	{
		name: "lemon",
		src: lemon,
		alt: "Лимон",
		count: 1,
	},
	{
		name: "apricot",
		src: apricot,
		alt: "Абрикос",
		count: 2,
	},
];

const plantStats_db = [
	{
		name: "plant",
		alt: "Посадить",
		src: plant,
	},
	{
		name: "exit",
		alt: "Закрыть",
		src: exit,
	},
];

export default class Plant extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: 0
		}
	}

	handleActive = (index) => {
		this.setState({
			isActive: index
		})
	}

	render() {
		const { isActive } = this.state;

		return (
			<div className="field__plant plant">
				<ul className="plant__wrapper">
					<ul className="plant__inventory">
						{
							plant_db.map(({ name, src, alt, count }, index) => {
								const active = (isActive === index);
								return (
									<li className={"plant__inventory-item" + (active ? " plant__inventory-item_active" : "")}
										onClick={() => this.handleActive(index)}
										tabIndex={0}
										key={name}>
										<div className="plant__product">
											<img src={src} alt={alt} className="plant__product-image" />
											<span className="plant__product-count">{count}</span>
										</div>
									</li>
								)
							})
						}
					</ul>

					<li className="plant__item">
						<span className="plant__item-name">{plant_db[isActive].alt}</span>
					</li>
					
					<ul className="plant__stat">
						{
							plantStats_db.map(({ name, alt, src }) => {
								return (
									<li className="plant__stat-item" key={name}>
										<img src={src} alt={alt} className="field__plant__stat-icon" />
									</li>
								)
							})
						}
					</ul>
				</ul>
			</div>
		)
	}
}