import React, { Component } from "react";
import { AppContext } from "../../../AppContext.js";
import { plant_db } from "../../../AppStorage/plant/plant.js";
import Item from "./Item/Item.jsx";

export default class List extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { activeCategory } = this.props;

		return (
			<AppContext.Consumer>
				{({ downBalance }) => (
					<ul className="shop__list">
						{
							plant_db.map(({ name, category, ...other }) => {
								return activeCategory === category ? (
									<Item item={ other } key={name} downBalanceClick={(price) => downBalance(price)} />
								) : null;
							})
						}
					</ul>
				)}
			</AppContext.Consumer>
		);
	}
}