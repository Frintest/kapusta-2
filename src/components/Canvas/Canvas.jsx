import React, { Component } from "react";
import _ from 'lodash';

import Cell from "./Cell/Cell.jsx";

import "./Canvas.scss";

import textureGrass from "./assets/textures/grass.png";
import textureRoad from "./assets/textures/road.png";
import textureCross from "./assets/textures/cross.png";

const mesh = [
	{
		name: "grass",
		src: textureGrass,
		isBreak: true,
		alt: "заросли",
	},
	{
		name:"road",
		src: textureRoad,
		isBreak: false,
		alt: "дорожка",
		modificators: {},
	},
	{
		name:"cross",
		src: textureCross,
		isBreak: false,
		alt: "перекрёсток",
	},
];

export default class Canvas extends Component {
	createField = (mesh) => {
		let field = [];
		const fieldWidth = 10;
		const fieldHeight = 10;
		let grassMesh = mesh[0];

		for (let i = 0; i < fieldHeight; i++) {
			field[i] = [];

			for (let j = 0; j < fieldWidth; j++) {
				field[i].push(grassMesh);
			}
		}

		const addRoad = (field, mesh) => {
			let roadVertical = _.cloneDeep(mesh);
			let roadHorizontal = _.cloneDeep(mesh);
			roadVertical.modificators.orientation = "vertical";
			roadHorizontal.modificators.orientation = "horizontal";

			field[0][4] = field[1][4] = field[2][4] = field[3][4] = field[5][4] = field[6][4] =
			field[5][6] = field[6][6] = field[7][6] = field[8][6] = roadVertical;

			field[4][0] = field[4][1] = field[4][3] = field[4][5] = field[4][7] = field[4][8] = roadHorizontal;
		}

		const addCross = (field, mesh) => {
			field[4][4], field[4][6] = mesh;
		}
		
		addRoad(field, mesh[1]);
		addCross(field, mesh[2]);

		return field;
	}
	
	constructor(props) {
		super(props);
		this.state = {
			indexActive: null
		}
	}

	handleActive = (index) => {
		this.setState({
			indexActive: index
		})
	}

	render() {
		const { indexActive } = this.state;

		return (
			<section className="canvas">
				<div className="canvas__container">
					<div className="canvas__content">
						{
							this.createField(mesh).map((row, indexRow) => {
								return (
									<div className="canvas__row" key={indexRow}>
										{
											row.map(({ ...other }, indexCell) => {
												const index = String(indexRow) + String(indexCell);
				
												return (
													<Cell other={other} key={index} />
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