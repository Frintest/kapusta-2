import React, { Component } from "react";

import CanvasCell from "./CanvasCell/CanvasCell.jsx";

import "./Canvas.scss";

export default class Canvas extends Component {
	constructor() {
		super();
		this.state = {
			isActive: "-1"
		}
	}

	generateCanvasData = () => {
		const rowsCount = 6;
		const cellsCount = 10;
		const canvasDB = [];

		for (let i = 0; i < rowsCount; i++) {
			canvasDB[i] = [];

			for (let j = 0; j < cellsCount; j++) {
				canvasDB[i].push(0);
			}
		}

		return canvasDB;
	}

	handleActive = (index) => {
		this.setState({
			isActive: index
		})
	}

	render() {
		const { isActive } = this.state;

		return (
			<section className="canvas">
				<div className="canvas__container">
					<div className="canvas__content">
						{
							this.generateCanvasData().map((row, indexRow) => {
								return (
									<div className="canvas__row" key={indexRow}>
										{
											row.map((cell, indexCell) => {
												const index = String(indexRow) + String(indexCell);
												// const active = index === isActive;

												return (
													<CanvasCell key={index} />
												)
											})
										}
									</div>
								)
							})
						}
					</div>
				</div>
			</section>
		)
	}
}