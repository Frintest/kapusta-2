import React, { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./AppContext.js";

import TopBar from "./components/TopBar/TopBar.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Field from "./pages/Field/Field.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Storage from "./pages/Storage/Storage.jsx";

import "focus-visible";
import "./scss/main.scss";
import "./scss/media/media.scss";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			balance: 10000,
		};
	}

	upBalance = (price) => {
		this.setState(({ balance }) => ({balance: balance + price}));
	}

	downBalance = (price) => {
		this.setState(({ balance }) => ({balance: balance - price}));
	}

	render() {
		const { balance } = this.state;

		return (
			<AppContext.Provider value={{
				balance: balance,
				upBalance: this.upBalance, // (price)
				downBalance: this.downBalance, // (price)
			}}>
				<Fragment>
					<TopBar />

					<main className="main">
						<Routes>
							<Route path="/" element={<Storage />}></Route>
							<Route path="/field" element={<Field />}></Route>
							<Route path="/shop" element={<Shop />}></Route>
							<Route path="/storage" element={<Storage />}></Route>
						</Routes>
					</main>

					<Menu />
				</Fragment>
			</AppContext.Provider>
		);
	}
}