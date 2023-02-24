import React, { Component } from "react";
import List from "./List/List.jsx"
import TabItem from "./List/TabItem/TabItem.jsx";

import pear from "../../assets/plant/plant-pear.png";
import pumpkin from "../../assets/plant/plant-pumpkin.png";
import chanterelle from "../../assets/plant/plant-chanterelle.png";

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
		name: "chanterelle",
		src: chanterelle,
		text: "Семена и прочее",
		category: "seeds",
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
								tabs_db.map(({ name, ...item }) => (
									<TabItem
										item={item}
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