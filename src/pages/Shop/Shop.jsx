import React, { Component } from "react";
import List from "./List/List.jsx"
import TabItem from "./List/TabItem/TabItem.jsx";

import pear from "../../assets/plant/plant-pear.png";
import pumpkin from "../../assets/plant/plant-pumpkin.png";
import cocoa from "../../assets/plant/plant-cocoa.png";

import "./Shop.scss"

const tabs_db = [
	{
		name: "pear",
		src: pear,
		text: "Фрукты",
		category: "fruits",
	},
	{
		name: "pumpkin",
		src: pumpkin,
		text: "Овощи",
		category: "vegetables",
	},
	{
		name: "cocoa",
		src: cocoa,
		text: "Семена и прочее",
		category: "1",
	},
];

export default class Shop extends Component {
	constructor() {
		super();
		this.state = {
			activeCategory: "fruits",
		};
	}

	setActiveCategory = (category) => {
		this.setState({activeCategory: category});
	}

	render() {
		const { activeCategory } = this.state;

		return (
			<section className="shop">
				<div className="shop__container">
					<div className="shop__wrap">
						<ul className="shop__tab-list">
							{
								tabs_db.map(({ name, ...other }) => (
									<TabItem
										item={other}
										activeCategory={activeCategory}
										setActiveCategory={this.setActiveCategory}
										key={name}
									/>
								))
							}
						</ul>

						<List activeCategory={activeCategory} />
					</div>
				</div>
			</section>
		);
	}
}