import React, { Component } from "react";
import _ from 'lodash';

import CanvasCell from "./CanvasCell/CanvasCell.jsx";

import "./Canvas.scss";

import textureGrass from "./assets/textures/grass.png";
import textureRoad from "./assets/textures/road.png";
import textureCross from "./assets/textures/cross.png";

const meshDB = [
	{
		name: "grass",
		src: textureGrass,
		alt: "заросли",
	},
	{
		name:"road",
		src: textureRoad,
		alt: "дорожка",
		modificators: {},
	},
	{
		name:"cross",
		src: textureCross,
		alt: "перекрёсток",
	},
];

export default class Canvas extends Component {
	generateCanvasData = (meshDB) => {
		const rowsCount = 6;
		const cellsCount = 10;
		const canvasDB = [];
		const grassTexture = meshDB[0];

		for (let i = 0; i < rowsCount; i++) {
			canvasDB[i] = [];

			for (let j = 0; j < cellsCount; j++) {
				canvasDB[i].push(grassTexture);
			}
		}

		const addRoad = (db) => {
			let roadMesh = meshDB[1];
			let roadVertical = _.cloneDeep(roadMesh);
			let roadHorizontal = _.cloneDeep(roadMesh);
			roadVertical.modificators.orientation = "vertical";
			roadHorizontal.modificators.orientation = "horizontal";

			db[0][4] = db[1][4] = db[3][4] = db[4][4] =
			db[3][6] = db[4][6] = db[5][6] = roadVertical;

			db[2][0] = db[2][1] = db[2][3] = db[2][5] = db[2][7] = db[2][8] = roadHorizontal;
		}

		const addCross = (db) => {
			let crossMesh = meshDB[2];

			db[2][4] = db[2][6] = crossMesh;
		}
		
		addRoad(canvasDB);
		addCross(canvasDB);

		return canvasDB;
	}

	render() {
		return (
			<section className="canvas">
				<div className="canvas__container">
					<div className="canvas__content">
						{
							this.generateCanvasData(meshDB).map((row, indexRow) => {
								return (
									<div className="canvas__row" key={indexRow}>
										{
											row.map(({ modificators, src, alt }, indexCell) => {
												const index = String(indexRow) + String(indexCell);

												return (
													<CanvasCell modificators={modificators ? modificators : ""} src={src} alt={alt} key={index} />
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