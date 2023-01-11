import { Component, Fragment } from "react";
import { CSSTransition } from "react-transition-group";

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
			options: [
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
		},
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

const sizeIcon = 44; // default 44px
const sizeOption = 18; // default 18px

export default class Menu extends Component {
	constructor() {
		super();
		this.state = {
			isActive: "-1"
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
									menuDB.innerContentItem.map(({ name, icon, options }, index) => {
										let numGroup = 0;
										let active = isActive === String(numGroup) + String(index);

										return (
											<Fragment>
												<CSSTransition in={active} timeout={100}>
													<ul className="menu__options">
														{
															options.map(({ name, icon }) => {
																return (
																	<li className="menu__option" key={name} tabIndex={0}>
																		<img src={icon} alt={name} className="menu__option-icon" width={sizeOption} height={sizeOption}/>
																		<span className="menu__option-title">{name}</span>
																	</li>
																)
															})
														}
													</ul>
												</CSSTransition>

												<CSSTransition in={active} timeout={0} key={name}>
													<li onClick={() => this.handleActive(numGroup, index)}
														className={"menu__select-item" + (active ? " menu__select-item_active" : "")}
														tabIndex={0}>
														<img src={icon} alt={name} className="menu__select-icon" width={sizeIcon} height={sizeIcon}/>
														<span className="menu__select-title">{name}</span>
														<button className="menu__select-exit" onClick={() => {numGroup = -1}} />
													</li>
												</CSSTransition>
											</Fragment>
										)
									})
								}
							</ul>
						
							<CSSTransition in={isActive === "00"} timeout={200}>
								<ul className="menu__link">
									{
										menuDB.linkItem.map(({ name, icon }, index) => {
											const numGroup = 1;
											let active = isActive === String(numGroup) + String(index);

											return (
												<li onClick={() => this.handleActive(numGroup, index)}
													className={"menu__link-item" + (active ? " menu__link-item_active" : " menu__link-item_hover")}
													key={name}
													tabIndex={0}>
													<img src={icon} alt={name} className="menu__link-icon" width={sizeIcon} height={sizeIcon}/>
												</li>
											)
										})
									}
								</ul>
							</CSSTransition>
						</ul>
					</nav>
				</div>
			</section>
		)
	}
}