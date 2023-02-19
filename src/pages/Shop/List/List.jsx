import React, { Component } from "react";
import { AppContext } from "../../../AppContext.js";
import { plant_db } from "../../../AppStorage/plant/plant.js";
import Item from "./Item/Item.jsx";

import "./List.scss";

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
							Object.entries(plant_db).map(([ category, list ]) => {
								 return (activeCategory === category) ? list.map(({ name, ...other }) => (
									<Item item={other} downBalanceClick={(price) => downBalance(price)} key={name} />
								)) : null;
							})
						}
					</ul>
				)}
			</AppContext.Consumer>
		);
	}
}