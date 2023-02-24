import React, { Component } from "react";
import { plant_db } from "../../../AppStorage/plant/plant.js";
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
			<div className="storage__body">
				<div className="storage-body__stats">
					<aside className="storage-body__spare-panel"></aside>
					<button
						className="storage-body__exit btn-exit"
						onClick={() => {
							setVisibleBoxsParent(true);
							setActiveBox(null);
						}}>
						<img src={exit} alt="Закрыть" className="btn-exit-icon" />
					</button>
				</div>

				<div className="storage-body__main">
					<ul className="storage-body__storage-list">
						{
							Object.entries(plant_db).map(([ category, list ]) => {
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
		);
	}
}