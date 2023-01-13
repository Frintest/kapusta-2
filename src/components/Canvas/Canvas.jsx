import React from "react";
import { Component } from "react";

import textureGround from "./assets/textures/ground.png";
import textureRoad from "./assets/textures/road.svg";
import textureCross from "./assets/textures/cross.svg";

import "./Canvas.scss";

export default class Canvas extends Component {
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

	render() {
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
												return (
													<div className="canvas__cell" key={String(indexRow) + String(indexCell)}>
														<img src={textureGround}
															alt="ground"
															className="canvas__texture"
															width={70}
															height={70} />
													</div>
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