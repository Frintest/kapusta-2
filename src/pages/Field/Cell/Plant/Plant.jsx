import React, { Component, Fragment } from "react";
import { FieldContext } from "../../FileldContext.jsx";
import { AppContext } from "../../../../AppContext.js";

import plant from "./assets/plant-plant.svg";
import exit from "../../../../assets/interface/btn-exit.svg";

import "./Plant.scss";


const plantStats_db = [
	{
		name: "plant",
		alt: "Посадить",
		src: plant,
	},
	{
		name: "exit",
		alt: "Закрыть",
		src: exit,
	},
];

export default class Plant extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeOfName: null,
			objectProduct: {},
			category: null,
		};
	}

	setActive = (item, category) => {
		const { name } = item;

		this.setState({
			activeOfName: name,
			objectProduct: item,
			category: category,
		});
	}

	render() {
		const { activeOfName, objectProduct, category } = this.state;
		const { index, handleActivePlant } = this.props;

		return (
			<div className="field__plant plant plant_active">
				<ul className="plant__wrapper">
					<AppContext.Consumer>
						{({ storage, downCountProduct }) => (
							<Fragment>
								<ul className="plant__inventory">
									{
										Object.entries(storage).map(([ category, list ]) => (
											list.map(({ ...item }) => {
												const { name, src, text, count } = item;

												return (
													<li
														className={"plant__inventory-item" + (activeOfName === name ? " plant__inventory-item_active" : "")}
														onClick={() => this.setActive(item, category)}
														tabIndex={0}
														key={name}
													>
														<div className="plant__product">
															<img src={src} alt={text} className="plant__product-image" />
															<span className="plant__product-count">{count}</span>
														</div>
													</li>
												);
											})
										))
									}
								</ul>

								<li className="plant__item">
									<span className="plant__item-name">{objectProduct.text}</span>
								</li>

								<FieldContext.Consumer>
									{({ plantCulture }) => (
										<ul className="plant__stat">
											{
												plantStats_db.map(({ name, text, src }) => (
													<li
														className="plant__stat-item _btn-small"
														onClick={() => {
															name === "plant" ? (
																plantCulture(index, objectProduct.src),
																downCountProduct(category, objectProduct)
															) : null;
															handleActivePlant(false);
														}}
														tabIndex={0}
														key={name}
													>
														<div className="_btn-small__container">
															<img src={src} alt={text} className="_btn-small__icon" />
														</div>
													</li>
												))
											}
										</ul>
									)}
								</FieldContext.Consumer>
							</Fragment>
						)}
					</AppContext.Consumer>
				</ul>
			</div>
		);
	}
}