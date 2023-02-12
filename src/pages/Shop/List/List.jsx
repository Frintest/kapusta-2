import React, { Component } from "react";

import Item from "./Item/Item.jsx";

import apple from "./assets/plant-apple-2.png";
import orange from "./assets/plant-orange-2.png";
import grape from "./assets/plant-grape-2.png";

const plant_db = [
	{
		name: "apple",
		src: apple,
		text: "Яблоки",
		price: 314,
	},
	{
		name: "orange",
		src: orange,
		text: "Апельсины",
		price: 410,
	},
	{
		name: "grape",
		src: grape,
		text: "Виноград",
		price: 956,
	},
];

export default class List extends Component {
	render() {
		return (
			<ul className="shop__list">
				{
					plant_db.map(({ name, ...other }) => {
						return (
							<Item item={ other } key={name} />
						);
					})
				}
			</ul>
		);
	}
}