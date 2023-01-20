import React, { Component, Fragment } from "react";

import "./scss/main.scss";

import Field from "./components/Field/Field.jsx";
import Menu from "./components/Menu/Menu.jsx";

import "./scss/media/media.scss";

import "focus-visible";

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<main className="main">
					<Field />
				</main>

				<Menu />
			</Fragment>
		)
	}
}