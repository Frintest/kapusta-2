import React from "react";
import { Component } from "react";
import { CSSTransition } from "react-transition-group";

import textureGround from "./assets/textures/ground.png";
import textureRoad from "./assets/textures/road.svg";
import textureCross from "./assets/textures/cross.svg";

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
		const { isActive, rotateTexture } = this.state;

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
												const active = index === isActive;

												return (
													<CSSTransition in={active} timeout={0} key={index}>
														<div onClick={() => this.handleActive(index)}
															className={"canvas__cell" + (active ? " canvas__cell_active" : "")}>
															<img src={textureGround} alt="ground" className="canvas__texture" />
														</div>
													</CSSTransition>
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