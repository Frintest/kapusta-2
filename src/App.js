import React, { Component, Fragment } from "react";

import "./scss/main.scss";

import Canvas from "./components/Canvas/Canvas.jsx";
import Menu from "./components/Menu/Menu.jsx";

import "focus-visible";

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<main className="main">
					<Canvas />
				</main>

				<Menu />
			</Fragment>
		)
	}
}