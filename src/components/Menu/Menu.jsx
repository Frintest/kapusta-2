import React, { Component, Fragment } from "react";
import { CSSTransition } from "react-transition-group";

import "./Menu.scss";

import menu from "./assets/menu-menu.svg";
import garden from "./assets/menu-garden.svg";
import storage from "./assets/menu-storage.svg";
import shop from "./assets/menu-shop.svg";
import market from "./assets/menu-market.svg";
import balance from "./assets/menu-balance.svg";

const menu_db = {
	menuItem: [	
		{
			name: "Склад",
			icon: storage,
		},
		{
			name: "Баланс",
			icon: balance,
		},
	],

	linkItem: [
		{
			name: "Сад",
			icon: garden,
		},
		{
			name: "Рынок",
			icon: market,
		},
		{
			name: "Магазин",
			icon: shop,
		},
	],
};

export default class Menu extends Component {
	constructor() {
		super();
		this.state = {
			isActiveItem: "10",
			isActiveMenu: false,
		};
	}

	setActiveItem = (numGroup, index) => {
		this.setState({isActiveItem: `${numGroup}${index}`});
	}

	setActiveMenu = (value) => {
		this.setState({isActiveMenu: value});
	}

	btnExitClicked = (evt) => {
		evt.stopPropagation();
	}

	render() {
		const { isActiveItem, isActiveMenu } = this.state;

		return (
			<section className="nav">
				<div className="nav__container">
					<nav className="nav__navigation">
						<div className="nav__menu-wrap">
							<CSSTransition in={isActiveMenu} timeout={50}>
								<ul className="nav__menu-list">
									{
										menu_db.menuItem.map(({ name, icon }, index) => {
											let numGroup = 0;
											let active = (isActiveItem === `${numGroup}${index}`);

											return (
												<li
													onClick={() => this.setActiveItem(numGroup, index)}
													className={"nav__menu-link" + (active ? " nav__menu-link_active": "")}
													tabIndex={0}
													key={name}
												>
													<img
														src={icon}
														alt={name}
														className="nav__menu-link-icon"
														width={18}
														height={18}
													/>
													<span className="nav__menu-link-title">{name}</span>
												</li>
											);
										})
									}
								</ul>
							</CSSTransition>

							<div className={"nav__menu" + (isActiveMenu ? " nav__menu_active" : "")}
								onClick={() => this.setActiveMenu(true)}
								tabIndex={0}
							>
								<img
									src={menu}
									alt="Меню"
									className="nav__menu-icon"
									width={44}
									height={44}
								/>
								<span className="nav__menu-text">Меню</span>
								<button className="nav__menu-btn-exit" onClick={(evt) => {
									this.btnExitClicked(evt);
									this.setActiveMenu(false);
								}} tabIndex={0} />
							</div>
						</div>

							{/* <CSSTransition in={isActive === "00"} timeout={280}>
								<ul className="menu__link">
									{
										menu_db.linkItem.map(({ name, icon }, index) => {
											const numGroup = 1;
											let active = (isActive === `${numGroup}${index}`);

											return (
												<li
													onClick={() => this.handleActive(numGroup, index)}
													className={"menu__link-item" + (active ? " menu__link-item_active" : " menu__link-item_hover")}
													key={name}
													tabIndex={0}
												>
													<img
														src={icon}
														alt={name}
														className="menu__link-icon"
														width={sizeItemIcon}
														height={sizeItemIcon}
													/>
												</li>
											);
										})
									}
								</ul>
							</CSSTransition> */}
					</nav>
				</div>
			</section>
		)
	}
}