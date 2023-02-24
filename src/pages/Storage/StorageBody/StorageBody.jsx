import React, { Component } from "react";
import { AppContext } from "../../../AppContext.js";

import StorageItem from "./StorageItem/StorageItem.jsx";

import exit from "../../../assets/interface/btn-exit.svg";

import "./StorageBody.scss";

export default class StorageBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: null,
			objectProduct: {},
		};
	}

	setActiveItem = (name, item) => {
		const { text } = item;

		this.setState({
			activeItem: name,
			objectProduct: {
				title: text,
			}
		});
	}

	render() {
		const { activeBox, setVisibleBoxsParent, setActiveBox } = this.props;
		const { activeItem, objectProduct } = this.state;

		return (
			<AppContext.Consumer>
				{({ storage }) => (
					<div className="storage__body">
						<div className="storage-body__stats">
							<aside className="storage-body__spare-panel"></aside>
							<button
								className="storage-body__exit _btn-small"
								onClick={() => {
									setVisibleBoxsParent(true);
									setActiveBox(null);
								}}>
								<div className="_btn-small__container">
									<img src={exit} alt="Закрыть" className="_btn-small__icon" />
								</div>
							</button>
						</div>

						<div className="storage-body__main">
							<ul className="storage-body__storage-list">
								{
									Object.entries(storage).map(([ category, list ]) => {
										return (activeBox === category) ? list.map(({ ...item }) => (
											<StorageItem
												item={item}
												setActiveItem={this.setActiveItem}
												activeItem={activeItem}
												key={item.name}
											/>
									)) : null;
								})
								}
							</ul>

							<div className="storage-body__item-content">
								<p className="storage-body__item-title">{objectProduct.title}</p>
							</div>
						</div>
					</div>
				)}
			</AppContext.Consumer>
		);
	}
}