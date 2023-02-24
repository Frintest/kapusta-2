import React, { Component } from "react";

import StorageBox from "./StorageBox/StorageBox.jsx";
import StorageBody from "./StorageBody/StorageBody.jsx";

import boxFruits from "./assets/box-fruits.png";
import boxVegetables from "./assets/box-vegetables.png";
import boxSeeds from "./assets/box-seeds.png";

import "./Storage.scss";

const storageBox_db = [
	{
		category: "fruits",
		src: boxFruits,
		alt: "ящик с фруктами",
		title: "Фрукты",
	},
	{
		category: "vegetables",
		src: boxVegetables,
		alt: "ящик с овощами",
		title: "Овощи",
	},
	{
		category: "seeds",
		src: boxSeeds,
		alt: "ящик с семенами",
		title: "Семена",
	},
];

export default class Storage extends Component {
	constructor() {
		super();
		this.state = {
			activeBox: null,
			isVisibleBoxsParent: true,
		};
	}

	setActiveBox = (nameBox) => {
		this.setState({activeBox: nameBox});
	}

	setVisibleBoxsParent = (isVisible) => {
		this.setState({isVisibleBoxsParent: isVisible});
	}

	render() {
		const { activeBox, isVisibleBoxsParent } = this.state;

		return (
			<section className="storage">
				 <div className="storage__container">
					{isVisibleBoxsParent ?
						<div className="storage__boxs">
							<div className="storage__boxs-layout">
								{
									storageBox_db.map(({ ...box }) => (
										<StorageBox
											box={box}
											setActiveBox={this.setActiveBox}
											setVisibleBoxsParent={this.setVisibleBoxsParent}
											key={box.category}
										/>
									))
								}
							</div>
						</div> :

						<StorageBody
							activeBox={activeBox}
							setVisibleBoxsParent={this.setVisibleBoxsParent}
							setActiveBox={this.setActiveBox}
						/>
					}
				</div>
			</section>
		);
	}
}