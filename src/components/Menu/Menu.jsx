import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./Menu.scss";

import menu from "./assets/menu-menu.svg";
import garden from "./assets/menu-garden.svg";
import storage from "./assets/menu-storage.svg";
import shop from "./assets/menu-shop.svg";
import market from "./assets/menu-market.svg";

const menu_db = {
	menuItem: [
		{
			name: "Склад",
			icon: storage,
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
											const numGroup = 0;
											let active = (isActiveItem === `${numGroup}${index}`);

											return (
												<li
													onClick={() => this.setActiveItem(numGroup, index)}
													className="nav__menu-item"
													tabIndex={0}
													key={name}
												>
													<Link
														class={"nav__menu-link" + (active ? " nav__menu-link_active": "")}
														to={
															name === "Склад" ? "/storage" : "/"
														}
													>
														<img
															src={icon}
															alt={name}
															className="nav__menu-link-icon"
															width={18}
															height={18}
														/>
														<span className="nav__menu-link-title">{name}</span>
													</Link>
												</li>
											);
										})
									}
								</ul>
							</CSSTransition>

							<div
								className={"nav__menu" + (isActiveMenu ? " nav__menu_active" : "")}
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

						<CSSTransition in={isActiveMenu} timeout={280}>
							<ul className="nav__list">
								{
									menu_db.linkItem.map(({ name, icon }, index) => {
										const numGroup = 1;
										let active = (isActiveItem === `${numGroup}${index}`);

										return (
											<li
												onClick={() => this.setActiveItem(numGroup, index)}
												className="nav__item"
												tabIndex={0}
												key={name}
											>
												<Link
													className={"nav__item-link" + (active ? " nav__item-link_active": "")}
													to={
														name === "Сад" ? "/field" :
														name === "Магазин" ? "/shop" : "/"
													}
												>
													<img
														className="nav__item-link-icon"
														src={icon}
														alt={name}
														width={44}
														height={44}
													/>
												</Link>
											</li>
										);
									})
								}
							</ul>
						</CSSTransition>
					</nav>
				</div>
			</section>
		);
	}
}