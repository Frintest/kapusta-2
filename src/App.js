import React, { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu/Menu.jsx";
import Field from "./pages/Field/Field.jsx";
import Shop from "./pages/Shop/Shop.jsx";

import "focus-visible";
import "./scss/main.scss";
import "./scss/media/media.scss";

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<main className="main">
					<Routes>
						<Route path="/" element={<Field />}></Route>
						<Route path="/field" element={<Field />}></Route>
						<Route path="/shop" element={<Shop />}></Route>
					</Routes>
				</main>
				
				<Menu />
			</Fragment>
		)
	}
}