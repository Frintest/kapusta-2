import React, { Component } from "react";
import { LocalContext } from "../../../LocalContext.jsx";
import Item from "./Item/Item.jsx";

import apple from "../../../assets/plant/plant-apple.png";
import orange from "../../../assets/plant/plant-orange.png";
import grape from "../../../assets/plant/plant-grape.png";
import ananas from "../../../assets/plant/plant-ananas.png";
import melon from "../../../assets/plant/plant-melon.png";
import corn from "../../../assets/plant/plant-corn.png";
import pumpkin from "../../../assets/plant/plant-pumpkin.png";
import eggplant from "../../../assets/plant/plant-eggplant.png";

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
	{
		name: "ananas",
		src: ananas,
		text: "Ананас",
		price: 1087,
	},
	{
		name: "melon",
		src: melon,
		text: "Арбуз",
		price: 3071,
	},
	{
		name: "corn",
		src: corn,
		text: "Кукуруза",
		price: 285,
	},
	{
		name: "pumpkin",
		src: pumpkin,
		text: "Тыква",
		price: 692,
	},
	{
		name: "eggplant",
		src: eggplant,
		text: "Баклажан",
		price: 142,
	},
];

export default class List extends Component {
	render() {
		return (
			<LocalContext.Consumer>
				{({ downBalance }) => (
					<ul className="shop__list">
						{
							plant_db.map(({ name, ...other }) => {
								return (
									<Item item={ other } key={name} downBalanceClick={(price) => downBalance(price)} />
								);
							})
						}
					</ul>
				)}
			</LocalContext.Consumer>
		);
	}
}