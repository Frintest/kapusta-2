import React, { Component } from "react";

import List from "./List/List.jsx"

import "./Shop.scss"

export default class Shop extends Component {
	render() {
		return (
			<section className="shop">
				<div className="shop__container">
					<List />
				</div>
			</section>
		)
	}
}