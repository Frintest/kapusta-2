import { Component } from "react";

import "./Menu.scss";

import house from "./menuDB/house.svg";
import garden from "./menuDB/garden.svg";
import vineyard from "./menuDB/vineyard.svg";
import storage from "./menuDB/storage.svg";
import shop from "./menuDB/shop.svg";
import market from "./menuDB/market.svg";
import balance from "./menuDB/balance.svg";

const menuDB = {
	innerContentItem: [
		{
			name: "Дом",
			icon: house,
			contentContent: [
				{
					name: "Сад",
					icon: garden,
				},
				{
					name: "Виноградник",
					icon: vineyard,
				},
				{
					name: "Склад",
					icon: storage,
				},
			]
		}
	],

	linkItem: [
		{
			name: "Магазин",
			icon: shop,
		},
		{
			name: "Рынок",
			icon: market,
		},
		{
			name: "Баланс",
			icon: balance,
		},
	],
};

export default class Menu extends Component {
	constructor() {
		super();
		this.state = {
			isActive: "00"
		}
	}

	handleActive = (numGroup, index) => {
		this.setState({
			isActive: String(numGroup) + String(index)
		})
	}
	
	render() {
		const { isActive } = this.state;
		
		return (
			<section className="menu">
				<div className="menu__container">
					<nav className="menu__nav">
						<ul className="menu__list">
							<ul className="menu__select">
								{
									menuDB.innerContentItem.map(({ name, icon }, index) => {
										const numGroup = 0;

										return (
											<li onClick={() => this.handleActive(numGroup, index)}
												className={"menu__select-item" + (isActive === (String(numGroup) + String(index)) ? " menu__select-item_active" : "")}
												key={name}
												tabIndex="0">
												<img src={icon} alt={name} className="menu__select-icon" />
											</li>
										)
									})
								}
							</ul>

							<ul className="menu__link">
								{
									menuDB.linkItem.map(({ name, icon }, index) => {
										const numGroup = 1;

										return (
											<li onClick={() => this.handleActive(numGroup, index)}
												className={"menu__link-item" + (isActive === (String(numGroup) + String(index)) ? " menu__link-item_active" : " menu__link-item_hover")}
												key={name}
												tabIndex="0">
												<img src={icon} alt={name} className="menu__link-icon" />
											</li>
										)
									})
								}
							</ul>
						</ul>
					</nav>
				</div>
			</section>
		)
	}
}