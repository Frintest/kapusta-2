import React, { Component } from "react";

import garnet from "./assets/garnet.png";
import lemon from "./assets/lemon.png";
import apricot from "./assets/apricot.png";

import "./Plant.scss";

const plant = [
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
			<div className="field__plant-modal">
				<ul className="field__plant-list">
					{
						plant.map(({ name, src, alt, count }, index) => {
							const active = (isActive === index);
							return (
								<li className={"field__plant-item" + (active ? " field__plant-item_active" : "")}
									onClick={() => this.handleActive(index)}
									tabIndex={0}
									key={name}>
									<div className="field__plant-image-wrapper">
										<img src={src} alt={alt} className="field__plant-image" />
										<span className="field__plant-image-count">{count}</span>
									</div>
									{/* <span className="field__plant-name">{alt}</span> */}
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}