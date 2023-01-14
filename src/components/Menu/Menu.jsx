import React, { Component, Fragment } from "react";
import { CSSTransition } from "react-transition-group";

import "./Menu.scss";

import house from "./menuDB/house.svg";
import garden from "./menuDB/garden.svg";
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

const sizeItemIcon = 44; // default 44px
const sizeOptionIcon = 18; // default 18px

export default class Menu extends Component {
	constructor() {
		super();
		this.state = {
			isActive: "-1",
			isOptionActive: -1
		}
	}

	handleActive = (numGroup, index) => {
		this.setState({
			isActive: String(numGroup) + String(index)
		})
	}

	handleOptionActive = (index) => {
		this.setState({
			isOptionActive: index
		})
	}
	
	render() {
		const { isActive, isOptionActive } = this.state;
		
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
											<Fragment key={name}>
												<CSSTransition in={active} timeout={50}>
													<ul className="menu__options">
														{
															options.map(({ name, icon }, index) => {
																return (
																	<li onClick={() => this.handleOptionActive(index)}
																		className={"menu__option" + (isOptionActive === index ? " menu__option_active": "")}
																		key={name}
																		tabIndex={0}>
																		<img src={icon} alt={name} className="menu__option-icon" width={sizeOptionIcon} height={sizeOptionIcon}/>
																		<span className="menu__option-title">{name}</span>
																	</li>
																)
															})
														}
													</ul>
												</CSSTransition>

												<CSSTransition in={active} timeout={0}>
													<li onClick={() => this.handleActive(numGroup, index)}
														className="menu__select-item"
														tabIndex={0}>
														<img src={icon} alt={name} className="menu__select-icon" width={sizeItemIcon} height={sizeItemIcon}/>
														<span className="menu__select-title">{name}</span>
														<button className="menu__select-exit" onClick={() => {numGroup = -1}} />
													</li>
												</CSSTransition>
											</Fragment>
										)
									})
								}
							</ul>
						
							<CSSTransition in={isActive === "00"} timeout={280}>
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
													<img src={icon} alt={name} className="menu__link-icon" width={sizeItemIcon} height={sizeItemIcon}/>
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