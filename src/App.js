import React, { Component, Fragment } from "react";

import "./scss/main.scss";

import Menu from "./components/Menu/Menu.jsx";

import "focus-visible";

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<main className="main">

				</main>

				<Menu />
			</Fragment>
		)
	}
}