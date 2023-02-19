import React, { Component } from "react";

import "./TabItem.scss";

export default class TabItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { item, activeCategory, setActiveCategory } = this.props,
			  { src, text, category } = item;

		return (
			<li className={"shop__tab" + (activeCategory === category ? " shop__tab_active" : "")} onClick={() => setActiveCategory(category)}>
				<div className="shop__tab-icon-wrap">
					<img src={src} alt={text} className="shop__tab-icon" />
				</div>
			</li>
		);
	}
}