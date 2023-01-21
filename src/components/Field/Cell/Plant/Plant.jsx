import React, { Component } from "react";

import pomegranate from "./assets/plant-pomegranate.png";
import orange from "./assets/plant-orange.png";
import banana from "./assets/plant-banana.png";
import plant from "./assets/plant-plant.svg";
import exit from "./assets/plant-exit.svg";

import "./Plant.scss";

const plant_db = [
	{
		name: "pomegranate",
		src: pomegranate,
		alt: "Гранат",
		count: 3,
	},
	{
		name: "orange",
		src: orange,
		alt: "Апельсины",
		count: 2,
	},
	{
		name: "banana",
		src: banana,
		alt: "Бананы",
		count: 8,
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
		const { isActiveClass, closePlant } = this.props;

		return (
			<div className={"field__plant plant" + isActiveClass}>
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
									<li className="plant__stat-item" onClick={() => closePlant(plant_db[isActive].src)} key={name}>
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