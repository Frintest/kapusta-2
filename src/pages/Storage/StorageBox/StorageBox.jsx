import React, { Component } from "react";

import "./StorageBox.scss";

export default class StorageBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { setActiveBox, box, setVisibleBoxsParent } = this.props,
			  { src, alt, category, title } = box;

		return (
			<article
				onClick={() => {
					setActiveBox(category);
					setVisibleBoxsParent(false);
				}}
				className="storage__box"
				tabIndex={0}
			>
				<img src={src} alt={alt} className="storage__box-image" height={100} />
				<p className="storage__box-title">{title}</p>
			</article>
		);
	}
}