import React, { Component } from "react";

import "./StorageItem.scss";

export default class StorageItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { item, setActiveItem, activeItem } = this.props,
			  { name, src, text, count } = item;

		return (
			<li
				onClick={() => setActiveItem(name, item)}
				className={"storage-body__item" + (name === activeItem ? " storage-body__item_active" : "")}
				tabIndex={0}
			>
				<div className="storage-body__item-image-wrap">
					<img src={src} alt={text} className="storage-body__item-image" />
				</div>
				<span className="storage-body__item-count">{count}</span>
			</li>
		);
	}
}