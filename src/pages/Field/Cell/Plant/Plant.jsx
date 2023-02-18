import React, { Component } from "react";
import { FieldContext } from "../../FileldContext.jsx";

import apple from "../../../../assets/plant/plant-apple.png";
import orange from "../../../../assets/plant/plant-orange.png";
import grape from "../../../../assets/plant/plant-grape.png";
import plant from "./assets/plant-plant.svg";
import exit from "./assets/plant-exit.svg";

import "./Plant.scss";


const plant_db = [
	{
		name: "apple",
		src: apple,
		text: "Яблоки",
		count: 2,
	},
	{
		name: "orange",
		src: orange,
		text: "Апельсины",
		count: 3,
	},
	{
		name: "grape",
		src: grape,
		text: "Виноград",
		count: 5,
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
			isActive: 0,
		};
	}

	setActive = (index) => {
		this.setState({isActive: index});
	}

	render() {
		const { isActive } = this.state;
		const { index, handleActivePlant } = this.props;

		return (
			<FieldContext.Consumer>
				{({ plantCulture }) => (
					<div className="field__plant plant plant_active">
						<ul className="plant__wrapper">
							<ul className="plant__inventory">
								{
									plant_db.map(({ name, src, text, count }, index) => {
										const active = (isActive === index);
										return (
											<li
												className={"plant__inventory-item" + (active ? " plant__inventory-item_active" : "")}
												onClick={() => this.setActive(index)}
												tabIndex={0}
												key={name}
											>
												<div className="plant__product">
													<img src={src} alt={text} className="plant__product-image" />
													<span className="plant__product-count">{count}</span>
												</div>
											</li>
										);
									})
								}
							</ul>

							<li className="plant__item">
								<span className="plant__item-name">{plant_db[isActive].text}</span>
							</li>

							<ul className="plant__stat">
								{
									plantStats_db.map(({ name, text, src }) => (
										<li
											className="plant__stat-item"
											key={name}
											onClick={() => {
												name === "plant" ? plantCulture(index, plant_db[isActive].src) : null;
												handleActivePlant(false);
											}}
											tabIndex={0}
										>
											<img src={src} alt={text} className="field__plant__stat-icon" />
										</li>
									))
								}
							</ul>
						</ul>
					</div>
				)}
			</FieldContext.Consumer>
		)
	}
}