import React, { Component } from "react";
import { FieldContext } from "./FileldContext.jsx";
import _ from 'lodash';

import Cell from "./Cell/Cell.jsx";

import "./Field.scss";

import textureGrass from "./assets/field-grass.png";
import textureRoad from "./assets/field-road.png";
import textureCross from "./assets/field-cross.png";

const mesh_db = [
	{
		name: "grass",
		src: textureGrass,
		isBreak: true,
		alt: "заросли",
		modificators: {},
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
		modificators: {},
	},
];

export default class Field extends Component {
	createField = (mesh, index) => {
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

		this.addRoad(field, mesh[1]);
		this.addCross(field, mesh[2]);

		this.setActiveCell(field, index);

		return field;
	}


	addRoad = (field, mesh) => {
		let roadVertical = _.cloneDeep(mesh);
		let roadHorizontal = _.cloneDeep(mesh);
		roadHorizontal.modificators.orientation = "horizontal";

		field[0][4] = field[1][4] = field[2][4] = field[3][4] = field[5][4] = field[6][4] = roadVertical;
		field[5][6] = field[6][6] = field[7][6] = field[8][6] = roadVertical;

		field[4][0] = field[4][1] = field[4][3] = field[4][5] = field[4][7] = field[4][8] = roadHorizontal;
	}


	addCross = (field, mesh) => {
		field[4][4], field[4][6] = mesh;
	}


	setActiveCell = (field, index) => {
		const rowIndex = Math.trunc(Number(index) / 10);
		const cellIndex = Number(index) % 10;

		let cellActive = _.cloneDeep(field[rowIndex][cellIndex]);
		cellActive.modificators.active = true;
		field[rowIndex][cellIndex] = cellActive;
	}


	constructor() {
		super();
		this.state = {
			field: this.createField(mesh_db, null)
		}
	}


	changeField = (index) => {
		this.setState({
			field: this.createField(mesh_db, index)
		})
	}


	render() {
		const { field } = this.state;

		return (
			<section className="field">
				<div className="field__container">
					<div className="field__content">
						<FieldContext.Provider value={{
							field: this.changeField
						}}>
							{field.map((row, indexRow) => {
								return (
									<div className="field__row" key={indexRow}>
										{
											row.map(({ ...cell }, indexCell) => {
												const index = String(indexRow) + String(indexCell);
				
												return (
													<Cell cell={cell} index={index} key={index} />
												)
											})
										}
									</div>
								)
							})}
						</FieldContext.Provider>
					</div>
				</div>
			</section>
		)
	}
}